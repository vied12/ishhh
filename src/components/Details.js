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
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import history from 'utils/history'

const styles = {
  root: {
    textAlign: 'center',
  },
  logoContainer: {
    display: 'block',
    marginBottom: 60,
  },
  logo: {
    maxWidth: '70%',
    maxHeight: 200,
  },
  images: {
    margin: [[40, 0]],
  },
  image: {
    width: '50%',
    maxWidth: 400,
    boxShadow: '0 0 1px rgba(0, 0, 0, .4)',
  },
  title: {
    marginBottom: 40,
  },
  selectBox: {
    width: 120,
    margin: [[0, 60]],
  },
}

class Details extends Component {
  state = {
    item: null,
    error: false,
    chosenSize: '',
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
          amount: parseInt(item.price, 10) * 100,
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

  render() {
    const { classes } = this.props
    const { item, chosenSize, error } = this.state
    if (!item) {
      return null
    }
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
        <Typography variant="display2" style={{ margin: 40 }}>
          {item.price} €
        </Typography>
        <FormControl className={classes.selectBox}>
          <InputLabel htmlFor="age-simple">Size</InputLabel>
          <Select
            value={this.state.chosenSize}
            onChange={event =>
              this.setState({ chosenSize: event.target.value })
            }
            fullWidth
            inputProps={{
              name: 'size',
              id: 'size',
            }}
          >
            {item.sizes.map(size => (
              <MenuItem value={size} key={size}>
                {size}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <StripeCheckout
          stripeKey="pk_test_l4UTcBerN81uYBRf3vNs7eyz"
          token={this.handleToken}
          currency="EUR"
          amount={parseInt(item.price, 10) * 100}
          name="ISHHH"
          locale="auto"
          billingAddress={false}
          shippingAddress
          // bitcoin
          disabled={!chosenSize}
        >
          <Button
            variant="raised"
            color="primary"
            size="large"
            disabled={!chosenSize}
          >
            Order now
          </Button>
        </StripeCheckout>
        <div className={classes.images}>
          <img
            src={item.front}
            alt="front"
            className={classes.image}
            style={{ marginRight: 40 }}
          />
          <img src={item.back} alt="back" className={classes.image} />
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
