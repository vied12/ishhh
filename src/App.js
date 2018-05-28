import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from 'components/Home'
import Impressum from 'components/Impressum'
import { withStyles } from '@material-ui/core/styles'

const styles = ({
  root: {
    '& a': {
      color: 'black',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',

      }
    }
  }
})
const App = ({ classes }) => {
  return (
    <Router>
      <div className={classes.root}>
        <Route exact path="/" component={Home} />
        <Route path="/impressum" component={Impressum} />
      </div>
    </Router>
  )
}

export default withStyles(styles)(App)
