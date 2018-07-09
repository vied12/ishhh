import React from 'react'
import Fontawesome from 'react-fontawesome'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import EtsyIcon from 'components/EtsyIcon'

const styles = {
  icon: {
    marginRight: 10,
  },
}

const AboutMe = ({ classes }) => (
  <div>
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
      <Button
        href="https://www.etsy.com/shop/ISHHH"
        target="_blank"
        rel="nofollow noreferrer"
      >
        <EtsyIcon
          className={classes.icon}
          style={{ position: 'relative', left: -3 }}
        />
        Etsy Shop
      </Button>
    </p>
  </div>
)

export default withStyles(styles)(AboutMe)
