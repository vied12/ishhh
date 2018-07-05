import React from 'react'
import { Router, Route } from 'react-router-dom'
import Home from 'components/Home'
import Details from 'components/Details'
import PaymentSuccessful from 'components/PaymentSuccessful'
import Impressum from 'components/Impressum'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import primary from '@material-ui/core/colors/deepOrange'
import ScrollToTop from 'components/ScrollToTop'
import history from 'utils/history'
import { Provider } from 'react-redux'
import configureStore from 'store'

import 'typeface-amatic-sc'
import 'typeface-roboto'
import * as inventoryActions from 'ducks/inventory'

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
      fontWeight: 400,
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

const store = configureStore()
store.dispatch(inventoryActions.fetchData())

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={history}>
          <ScrollToTop>
            <Route exact path="/" component={Home} />
            <Route path="/impressum" component={Impressum} />
            <Route path="/payment-successful" component={PaymentSuccessful} />
            <Route exact path="/:key" component={Details} />
          </ScrollToTop>
        </Router>
      </Provider>
    </MuiThemeProvider>
  )
}

export default App
