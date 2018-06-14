import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import LazyLoad from 'react-lazyload'

const styles = {
  root: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  gridItem: {
    transition: 'all .75s',
    '&:hover': {
      flexShrink: 0,
    },
    height: '50vh',
    position: 'relative',
    '& img': {
      maxWidth: '100%',
      maxHeight: '100%',
      minWidth: '100%',
      minHeight: '100%',
      objectFit: 'cover',
      boxShadow: [0, 0, 25, 'rgba(0, 0, 0, 0.3)'],
    },
  },
}

class Pictures extends Component {
  render() {
    const { classes, pictures } = this.props
    return (
      <div className={classes.root}>
        {pictures.map((src, i) => (
          <div className={classes.gridItem} key={src}>
            <LazyLoad once height="100%" offset={300}>
              <img src={src} alt={src} />
            </LazyLoad>
          </div>
        ))}
      </div>
    )
  }
}

export default withStyles(styles)(Pictures)
