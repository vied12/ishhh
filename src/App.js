import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from 'components/Home'
import Impressum from 'components/Impressum'
import { withStyles } from '@material-ui/core/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import 'typeface-rajdhani'

const theme = createMuiTheme({
  typography: {
    fontFamily: '\'Rajdhani\', sans-serif',
  }
})

const styles = ({
})

const App = ({ classes }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className={classes.root}>
          <Route exact path="/" component={Home} />
          <Route path="/impressum" component={Impressum} />
        </div>
      </Router>
    </MuiThemeProvider>
  )
}

export default withStyles(styles)(App)
