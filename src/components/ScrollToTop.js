import React from 'react'
import { withRouter } from 'react-router-dom'

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)

      const gtag = window.gtag

      if (this.props.history.action === 'PUSH' && typeof gtag === 'function') {
        gtag('config', 'UA-101784953-1', {
          page_location: window.location.href,
          page_path: this.props.location.pathname,
        })
      }
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
