import React from 'react'
import withStyle from 'react-jss'
import logo from 'images/ishhh-NB-MD.png'
import { Link } from 'react-router-dom'

const styles = ({
  root: {
    padding: 60,
  },
})
const Footer = ({ classes }) => (
  <div className={classes.root}>
    <Link to="/" component="div"><img src={logo} width={150} alt="ISHHH logo"/></Link>
    <p>
      <Link to="/impressum">Impressum</Link>
    </p>
  </div>
)

export default withStyle(styles)(Footer)