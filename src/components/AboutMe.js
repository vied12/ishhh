import React from 'react'
import Fontawesome from 'react-fontawesome'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  icon: {
    marginRight: 10,
  },
}

const AboutMe = ({ classes }) => (
  <div>
    <Typography style={{ maxWidth: 600, fontSize: '1.3rem' }}>
      I found inspiration in the indian colours and patterns, elegant sarees and
      gold jewelries. I like to mix those fabrics with actual designs.<br />
      I enjoy the contrast between the urban cities, grey, the tar and the
      asphalt, moderns buildings with colorful, golden and “traditionals”
      fabrics.
    </Typography>
    <p className="follow-us">
      <Button
        href="https://www.instagram.com/carmenspella/"
        target="_blank"
        rel="nofollow noreferrer"
      >
        <Fontawesome name="instagram" size="2x" className={classes.icon} />
        carmenspella
      </Button>
      <Button
        href="https://www.facebook.com/Ishhhliebedich/"
        target="_blank"
        rel="nofollow noreferrer"
      >
        <Fontawesome
          name="facebook-official"
          size="2x"
          className={classes.icon}
        />
        Ishhhliebedich
      </Button>
    </p>
  </div>
)

export default withStyles(styles)(AboutMe)
