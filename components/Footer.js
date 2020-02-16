import React from 'react'
import logo from '../images/ishhh-NB-MD.png'
import Link from 'next/link'
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
    <Link href="/">
      <img src={logo} width={150} alt="ISHHH logo" />
    </Link>
    <Typography variant="body2" className={classes.credits}>
      Pattern Maker:{' '}
      <a href="mailto:loicxgros@gmail.com" rel="nofollow noreferrer noopener">
        Loïc&nbsp;Gros
      </a>
      <br />
      Graphic Identity:{' '}
      <a href="http://www.juliaze.com" rel="nofollow noreferrer noopener">
        Julia&nbsp;Zé
      </a>
      <br />
      Models:{' '}
      <a
        href="https://www.instagram.com/technopussi"
        rel="nofollow noreferrer noopener"
      >
        Nikki
      </a>, Adèle Chénez
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
    <Link passHref href="/impressum">
    <Button>
      Impressum
    </Button>
    </Link>
  </div>
)

export default withStyles(styles)(Footer)
