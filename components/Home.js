import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import AboutMe from './AboutMe'
import Galery from './Galery'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import meImg from '../images/me.jpg'
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
          <Typography variant="h3" gutterBottom>
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
        <div
          className={classes.containerWithMargin}
          style={{ textAlign: 'left' }}
        >
          <Grid container spacing={10} style={{}}>
            <Grid item xs={12} md={9}>
              <Typography variant="h4" gutterBottom>
                About Ishhh
              </Typography>
              <Grid container spacing={10}>
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
