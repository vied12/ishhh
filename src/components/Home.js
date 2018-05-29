import React, { Component } from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Pictures from 'components/Pictures'
import InstagramEmbed from 'react-instagram-embed'
import withStyle from 'react-jss'
import 'typeface-ibm-plex-sans'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'

const styles = ({
  root: {
    textAlign: 'center',
    fontFamily: '\'IBM Plex Sans\', sans-serif',
    '& p': {
      fontSize: '1.6rem',
    }
  },
  embed: {
    '& iframe': {
      margin: 'auto !important'
    },
  },
  logo: {
    maxWidth: '40vw',
    width: 500,
    marginBottom: 60,
  },
})

class Home extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Header />
        <div  style={{margin: 40 }}>
          <Grid container alignItems="center" spacing={16}>
            <Grid item xs={12} sm={6} md={9}>
              <Typography style={{ maxWidth: 600, margin: '0 auto' }}>
                I found inspiration in the indian colours and patterns, elegant sarees and gold jewelries. I like to mix those fabrics with actual designs.<br />
                I enjoy the contrast between the urban cities, grey, the tar and the asphalt, moderns buildings with colorful, golden  and “traditionals” fabrics.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <InstagramEmbed
                url="https://www.instagram.com/p/Bi-DVDGBaDY"
                maxWidth={300}
                hideCaption
                className={classes.embed}

              />
            </Grid>
          </Grid>
        </div>
        <Pictures />
        <Footer />
      </div>
    )
  }
}

export default withStyle(styles)(Home)
