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
import shopImg from 'images/boutique-hanlaure.jpeg'
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
            Welcome to ishhh Shop
          </Typography>
          <Typography gutterBottom>
            I brought from my travels in India a selection of my favorite
            fabrics, traditional sarees and embroidered borders. I twisted those
            elaborated patterns with a simple and structured cut to create
            playful and elegant pieces.
          </Typography>
          <Typography gutterBottom>
            Because comfort comes first, all garnments are made with a 100%
            cotton lining from Germany. Jeans jackets are handmade sewed and
            customized with a nath nose ring, an authentic indian jewelry. These
            are limited collections with unique pieces created and produced in
            Berlin.
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
                  <Typography style={{ fontWeight: 400 }}>Han'Laure</Typography>
                  <Typography>
                    430 Quai Georges Pompidou<br />34280 La Grande-Motte<br />France
                  </Typography>
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
