import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from 'components/Home'
import Details from 'components/Details'
import Impressum from 'components/Impressum'
import { withStyles } from '@material-ui/core/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import primary from '@material-ui/core/colors/deepOrange'
import ScrollToTop from 'components/ScrollToTop'

import 'typeface-amatic-sc'
import 'typeface-roboto'

const theme = createMuiTheme({
  palette: {
    primary: {
      ...primary,
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    body1: {
      fontWeight: 300,
      fontSize: '1.1rem',
    },
    title: {
      fontWeight: 300,
      fontSize: '1.1rem',
    },
    headline: {
      fontFamily: "'Amatic SC', cursive",
    },
    display3: {
      fontFamily: "'Amatic SC', cursive",
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: '2.8rem',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
      },
    },
  },
})

const styles = {}

const App = ({ classes }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <ScrollToTop>
          <Route exact path="/" component={Home} />
          <Route path="/impressum" component={Impressum} />
          <Route exact path="/:key" component={Details} />
        </ScrollToTop>
      </Router>
    </MuiThemeProvider>
  )
}

export default withStyles(styles)(App)
