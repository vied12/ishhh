import React, { Component } from 'react'
import Footer from 'components/Footer'
import Galery from 'components/Galery'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import getData from 'data'
import logo from 'images/ishhh-NB-MD.png'
import { Link } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
import history from 'utils/history'
import Selector from 'components/Selector'

const REGIONS = {
  Germany: 5,
  Europe: 7,
  World: 9,
}
const styles = theme => ({
  root: {
    textAlign: 'center',
  },
  logoContainer: {
    marginTop: 40,
    marginBottom: 100,
    display: 'inline-block',
  },
  logo: {
    maxWidth: '70%',
    maxHeight: 200,
  },
  images: {
    margin: [[70, 0]],
  },
  image: {
    display: 'inline-block',
    width: '40%',
    maxWidth: 600,
    boxShadow: '0 0 1px rgba(0, 0, 0, .4)',
    margin: 20,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: 0,
      marginBottom: 40,
    },
    '& img': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    '&:after': {
      content: '""',
      display: 'block',
      paddingBottom: '100%',
    },
  },
  title: {
    marginBottom: 40,
  },
  cgv: {
    textAlign: 'left',
    maxWidth: 600,
    margin: 'auto',
    marginTop: 60,
    '& h2': {
      fontSize: '.9rem',
    },
    '& p': {
      fontSize: '.9rem',
    },
  },
})

class Details extends Component {
  state = {
    item: null,
    error: false,
    chosenSize: '',
    chosenRegion: '',
  }

  componentWillMount() {
    this.getData()
  }

  componentWillReceiveProps() {
    this.getData()
  }

  getData() {
    getData().then(d =>
      this.setState({
        item: d.find(d => d.key === this.props.match.params.key),
      }),
    )
  }

  handleToken = token => {
    const { item, chosenSize } = this.state
    fetch(
      'https://wt-d7f3465bba4be50c0e0805107a2dddb9-0.sandbox.auth0-extend.com/stripe-payment/payment',
      {
        method: 'POST',
        body: JSON.stringify({
          stripeToken: token.id,
          amount: (parseInt(item.price, 10) + this.getShippingPrice()) * 100,
          currency: 'EUR',
          description: `${item.name} ${chosenSize}`,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    ).then(d => {
      if (d.ok) {
        history.push('/payment-successful')
      } else {
        d.text().then(text => {
          this.setState({ error: text })
        })
      }
    })
  }

  getShippingPrice = () => {
    return REGIONS[this.state.chosenRegion]
  }

  render() {
    const { classes } = this.props
    const { item, chosenSize, chosenRegion, error } = this.state
    if (!item) {
      return null
    }
    const shippingPrice = this.getShippingPrice()
    return (
      <div className={classes.root}>
        <Link to="/" className={classes.logoContainer}>
          <img src={logo} alt="ISHHH" className={classes.logo} />
        </Link>
        {!!error && (
          <div style={{ margin: 80 }}>
            <Typography variant="display2" color="error">
              Sorry, an error occured.
            </Typography>
            <Typography>{error}</Typography>
            <Typography>
              Please try again,{' '}
              <a href="https://m.me/ishhhliebedich">or contact us</a>
            </Typography>
          </div>
        )}
        <Typography variant="display3" className={classes.title} gutterBottom>
          {item.name}
        </Typography>
        <div className={classes.images}>
          <div className={classes.image}>
            <img src={item.front} alt="front" />
          </div>
          <div className={classes.image}>
            <img src={item.back} alt="back" />
          </div>
        </div>
        <Typography variant="display3" gutterBottom>
          Buy online
        </Typography>
        {item.description &&
          item.description.split('\n').map((s, i) => (
            <Typography key={i} gutterBottom>
              {s}
            </Typography>
          ))}
        <Selector
          value={chosenSize}
          label="Sizes"
          onChange={s => this.setState({ chosenSize: s })}
          choices={item.sizes}
        />
        <Selector
          value={chosenRegion}
          label="Region"
          onChange={s => this.setState({ chosenRegion: s })}
          choices={Object.keys(REGIONS)}
        />
        <StripeCheckout
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
          token={this.handleToken}
          currency="EUR"
          amount={(parseInt(item.price, 10) + shippingPrice) * 100}
          name="ISHHH"
          locale="auto"
          billingAddress={false}
          shippingAddress
          // bitcoin
          disabled={!chosenSize || !chosenRegion}
        >
          <Button
            variant="raised"
            color="primary"
            size="large"
            style={{ margin: 40 }}
            disabled={!chosenSize || !chosenRegion}
          >
            Order now
          </Button>
        </StripeCheckout>
        <Typography variant="display2">{item.price} €</Typography>
        <Typography>
          Shipping:{' '}
          {shippingPrice ? (
            `+ ${shippingPrice} €`
          ) : (
            <Typography variant="caption">Select a region first</Typography>
          )}
        </Typography>
        <Typography variant="caption" style={{ padding: 20 }}>
          We do not store your credit card information.<br />
          We instead rely on the secure third-party payment processor Stripe.<br />
          You may also want to read Stripe's privacy policy:{' '}
          <a
            href="https://stripe.com/us/privacy"
            target="_blank"
            rel="nofollow noreferrer noopener"
            style={{ color: 'black' }}
          >
            https://stripe.com/us/privacy
          </a>
        </Typography>
        <div className={classes.cgv}>
          <Typography gutterBottom variant="title">
            Processing time
          </Typography>
          <Typography gutterBottom>1-3 business days</Typography>

          <Typography gutterBottom variant="title">
            Estimated shipping times
          </Typography>
          <Typography gutterBottom>
            Europe: 3-6 business days<br />
            I'll do my best to meet these shipping estimates, but can't
            guarantee them.
          </Typography>

          <Typography gutterBottom variant="title">
            Customs and import taxes
          </Typography>
          <Typography gutterBottom>
            Buyers are responsible for any customs and import taxes that may
            apply. I'm not responsible for delays due to customs.
          </Typography>

          <Typography gutterBottom variant="title">
            I accept returns, exchanges and cancellations
          </Typography>
          <Typography gutterBottom>
            Contact me within: 24 hours of delivery<br />
            Ship items back within: 7 days of delivery<br />
            Request a cancellation within: 12 hours of purchase
          </Typography>

          <Typography gutterBottom variant="title">
            Conditions of return
          </Typography>
          <Typography gutterBottom>
            Buyers are responsible for return shipping costs. If the item is not
            returned in its original condition, the buyer is responsible for any
            loss in value.
          </Typography>

          <Typography gutterBottom variant="title">
            Questions about your order?
          </Typography>
          <Typography gutterBottom>
            Please{' '}
            <Button
              color="primary"
              target="_blank"
              size="small"
              rel="nofollow noreferrer noopener"
              href="https://m.me/ishhhliebedich"
            >
              Contact Me
            </Button>{' '}
            if you have any problems with your order.
          </Typography>
        </div>
        <Typography variant="display3" gutterBottom style={{ marginTop: 200 }}>
          Others clothes available
        </Typography>
        <Galery />
        <Footer />
      </div>
    )
  }
}

export default withStyles(styles)(Details)
