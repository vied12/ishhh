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
import catalog from 'data'
import shopImg from 'images/shop.jpg'
import meImg from 'images/me.jpg'

const styles = {
  root: {
    textAlign: 'center',
  },
  containerWithMargin: {
    margin: 40,
    marginTop: 100,
  },
  embed: {
    '& iframe': {
      margin: 'auto !important',
    },
  },
}

class Home extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Header />
        <div className={classes.containerWithMargin}>
          <Typography variant="display3" gutterBottom>
            Original and exclusive collection
          </Typography>
          <Typography gutterBottom variant="title">
            Indian fabrics and sarees with 100% cotton lining
          </Typography>
          <Typography variant="title">Handmade in berlin</Typography>
        </div>
        <Galery pictures={catalog} />
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
