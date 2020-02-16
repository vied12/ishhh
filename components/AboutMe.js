import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { withStyles } from '@material-ui/core/styles'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const styles = {
  icon: {
    marginRight: 10,
  },
}

const AboutMe = ({ classes }) => (
  <Box>
    <Typography style={{ maxWidth: 600 }}>
      I find my inspiration in indian garment: elegant sarees, rich patterns,
      colorful fabrics and gold jewelry. I enjoy the contrast between urban and
      traditional, industrial vs craftmanship, the grey of asphalt vs. colorful
      fashion and mixing contemporary designs with authentic indian fabrics.
    </Typography>
    <p className="follow-us">
      <Button
        href="https://www.instagram.com/carmenspella/"
        target="_blank"
        rel="nofollow noreferrer"
      >
        <FontAwesomeIcon         icon={faInstagram}
 size="2x" className={classes.icon} />
        carmenspella
      </Button>
      <Button
        href="https://www.facebook.com/Ishhhliebedich/"
        target="_blank"
        rel="nofollow noreferrer"
      >
        <FontAwesomeIcon
        icon={faFacebook}
          size="2x"
          className={classes.icon}
        />
        Ishhhliebedich
      </Button>
    </p>
  </Box>
)

export default withStyles(styles)(AboutMe)
