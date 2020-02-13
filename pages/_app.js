import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Provider} from "react-redux";
import theme from '../config/theme';
import withReduxStore from '../store/with-redux-store'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

class MyApp extends App {

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <React.Fragment>
        <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <meta name="theme-color" content="tomato"/>
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:url" content="%PUBLIC_URL%" />
    <meta property="og:title" content="ISHHH | Original clothes collection | Indian &amp; French Inspirations" />
    <meta property="og:description" content="Colourful tops &amp; jackets made with Indian fabrics. Created by a French Designer" />
    <meta property="og:image" content="%PUBLIC_URL%/og.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <title>ISHHH | Original clothes collection | Indian &amp; French Inspirations</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Provider store={reduxStore}>
          <Component {...pageProps} />
                </Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withReduxStore(MyApp)
