import React, { Component } from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Pictures from 'components/Pictures'
import withStyle from 'react-jss'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import { pictures, previousCollection } from 'pictures'

const styles = ({
  root: {
  },
  containerWithMargin: {
    margin: 40,
    marginTop: 100,
  },
  embed: {
    '& iframe': {
      margin: 'auto !important'
    },
  },
})

class Home extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Header />
        <div  className={classes.containerWithMargin}>
          <Typography variant="display3">The new collection 2018</Typography>
        </div>
        <Pictures pictures={pictures} />
        <div className={classes.containerWithMargin}>
          <Typography variant="display3">Collection 2017</Typography>
          <Typography variant="caption">Indian fabric and cotton (lining and skirt: 100% cotton)</Typography>
        </div>
        <Pictures pictures={previousCollection} />
        <div  className={classes.containerWithMargin}>
            <Typography variant="display3" gutterBottom>About me</Typography>
          <Grid container spacing={40} style={{ }}>
            <Grid item xs={12} md={3}>
              <img
                alt="The creator, Carmen, in Inda"
                src="https://scontent-amt2-1.cdninstagram.com/vp/1e08c3a8171d9030d4eec7838acaba9e/5BBA0FDA/t51.2885-15/e35/28433875_199108660850235_1003813657567559680_n.jpg"
                style={{width: '100%', borderRadius: 0 }}/>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography style={{ maxWidth: 600, fontSize: '1.3rem' }}>
                I found inspiration in the indian colours and patterns, elegant sarees and gold jewelries. I like to mix those fabrics with actual designs.<br />
                I enjoy the contrast between the urban cities, grey, the tar and the asphalt, moderns buildings with colorful, golden  and “traditionals” fabrics.
              </Typography>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyle(styles)(Home)
