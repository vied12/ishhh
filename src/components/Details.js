import React, { Component } from 'react'
import Footer from 'components/Footer'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import getData from 'data'
import logo from 'images/ishhh-NB-MD.png'
import { Link } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'

const styles = {
  root: {
    textAlign: 'center',
  },
  logoContainer: {
    display: 'block',
    marginBottom: 100,
  },
  logo: {
    maxWidth: '70%',
    maxHeight: 200,
  },
  image: {
    width: '50%',
    maxWidth: 700,
  },
  title: {
    marginBottom: 40,
  },
}

class Details extends Component {
  state = {
    item: {},
  }

  componentWillMount() {
    getData().then(d =>
      this.setState({
        item: d.find(d => d.key === this.props.match.params.key),
      }),
    )
  }

  handleToken = token => {
    console.log(token)
    fetch(
      'https://wt-d7f3465bba4be50c0e0805107a2dddb9-0.sandbox.auth0-extend.com/stripe-payment',
      {
        method: 'POST',
        body: JSON.stringify(token),
      },
    )
  }

  render() {
    const { classes } = this.props
    const { item } = this.state
    return (
      <div className={classes.root}>
        <Link to="/" className={classes.logoContainer}>
          <img src={logo} alt="ISHHH" className={classes.logo} />
        </Link>
        <Typography variant="display3" className={classes.title} gutterBottom>
          {item.name}
        </Typography>
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_l4UTcBerN81uYBRf3vNs7eyz"
          token={this.handleToken}
          currency="EUR"
          amount={999}
          name="ISHHH"
          locale="auto"
          billingAddress={false}
          // shippingAddress
          bitcoin
        >
          <Button variant="raised" color="primary" size="large">
            Order now
          </Button>
        </StripeCheckout>
        <div>
          <img src={item.front} className={classes.image} />
          <img src={item.back} className={classes.image} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(styles)(Details)
