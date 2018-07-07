import React, { Component } from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'
import AboutMe from 'components/AboutMe'
import Galery from 'components/Galery'
import Pictures from 'components/Pictures'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import { previousCollection } from 'pictures'
import shopImg from 'images/shop.jpg'
import meImg from 'images/me.jpg'
import classNames from 'classnames'

const styles = {
  root: {
    textAlign: 'center',
  },
  containerWithMargin: {
    margin: 40,
    marginTop: 100,
    marginBottom: 80,
  },
  embed: {
    '& iframe': {
      margin: 'auto !important',
    },
  },
  introText: {
    maxWidth: 700,
    padding: 20,
    margin: [[60, 'auto', 80, 'auto']],
    '& h1': {
      marginBottom: 40,
    },
    '& p': {
      fontSize: '1rem',
      marginBottom: '0.7em',
      textAlign: 'left',
    },
  },
}

class Home extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Header />
        <div
          className={classNames(classes.containerWithMargin, classes.introText)}
        >
          <Typography variant="display3" gutterBottom>
            Welcome to Ishhh Shop
          </Typography>
          <Typography gutterBottom>
            I brought from my travels in India a selection of my favorite
            fabrics and traditional sarees. I wanted to twist their colors,
            patterns and embroideries with a minimalist and structured cut. A
            way to reveal their prestance and yours.
          </Typography>
          <Typography gutterBottom>
            Kimonos and crop tops are made with a 100% cotton lining from
            Germany for the best comfort. Jeans jackets are manually customized
            with fabrics and a nath nose ring, an authentic indian jewelry. This
            is a limited collection with unique pieces, everything is handmade
            in Berlin. I hope you will enjoy it!
          </Typography>
        </div>
        <Galery />
        <div className={classes.containerWithMargin}>
          <Typography variant="display3">Collection 2017</Typography>
        </div>
        <Pictures pictures={previousCollection} />
        <div
          className={classes.containerWithMargin}
          style={{ textAlign: 'left' }}
        >
          <Grid container spacing={40} style={{}}>
            <Grid item xs={12} md={6}>
              <Typography variant="display3" gutterBottom>
                Find me
              </Typography>
              <Grid container spacing={40} style={{}}>
                <Grid item xs={12} md={5}>
                  <img width="100%" src={shopImg} alt="Shop" />
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography style={{ fontWeight: 400 }}>
                    Dunkel Blau fast Schwarz
                  </Typography>
                  <Typography>
                    Rykestraße 16, Prenzlauer Berg, Berlin
                  </Typography>
                  <Typography>Monday - Friday: 12pm - 7pm</Typography>
                  <Typography>Saturday: 12pm - 6pm</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="display3" gutterBottom>
                About me
              </Typography>
              <Grid container spacing={40}>
                <Grid item xs={12} md={5}>
                  <img
                    alt="The creator, Carmen, in Inda"
                    src={meImg}
                    style={{ width: '100%', borderRadius: 0 }}
                  />
                </Grid>
                <Grid item xs={12} md={7}>
                  <AboutMe />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(styles)(Home)
