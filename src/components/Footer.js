import React from 'react'
import logo from 'images/ishhh-NB-MD.png'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    marginTop: 100,
    padding: 60,
    textAlign: 'center',
    '& a': {
      color: theme.palette.text.primary,
    },
  },
  credits: {
    margin: 40,
  },
})
const Footer = ({ classes }) => (
  <div className={classes.root}>
    <Link to="/" component="div">
      <img src={logo} width={150} alt="ISHHH logo" />
    </Link>
    <Typography variant="body2" className={classes.credits}>
      Dress designer:{' '}
      <a href="mailto:loicxgros@gmail.com" rel="nofollow noreferrer noopener">
        Loïc&nbsp;Gros
      </a>
      <br />
      Graphic identity:{' '}
      <a href="http://www.juliaze.com" rel="nofollow noreferrer noopener">
        Julia&nbsp;Zé
      </a>
      <br />
      Model:{' '}
      <a
        href="https://www.instagram.com/technopussi"
        rel="nofollow noreferrer noopener"
      >
        Nikki
      </a>
      <br />
      Hair & Make-up artist:{' '}
      <a href="http://adrianametzlaff.de" rel="nofollow noreferrer noopener">
        Adriana&nbsp;Metzlaff
      </a>
      <br />
      Website:{' '}
      <a href="https://vied12.github.io" rel="nofollow noreferrer noopener">
        Edouard&nbsp;Richard
      </a>
      <br />
    </Typography>
    <Button component={Link} to="/impressum">
      Impressum
    </Button>
  </div>
)

export default withStyles(styles)(Footer)
