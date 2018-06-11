import React, { Component } from 'react'
import Footer from 'components/Footer'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    textAlign: 'center',
    maxWidth: 800,
    margin: [[200, 'auto']],
  },
}

class PaymentSuccessfull extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Typography gutterBottom variant="display3">
          Thank you !
        </Typography>
        <Typography gutterBottom>
          You will receive soon an email with your invoice.
        </Typography>
        <Footer />
      </div>
    )
  }
}

export default withStyles(styles)(PaymentSuccessfull)
