import React from 'react'
import withStyle from 'react-jss'
import logo from 'images/ishhh-NB-MD.png'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const styles = ({
  root: {
    padding: 60,
    textAlign: 'center',
  },
})
const Footer = ({ classes }) => (
  <div className={classes.root}>
    <Link to="/" component="div"><img src={logo} width={150} alt="ISHHH logo"/></Link>
    <p>
      <Button component={Link} to="/impressum">Impressum</Button>
    </p>
  </div>
)

export default withStyle(styles)(Footer)