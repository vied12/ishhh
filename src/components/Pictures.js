import React, { Component } from 'react'
import withStyle from 'react-jss'

const styles = {
  root: {
    marginTop: 20,
    paddingTop: 60,
    paddingBottom: 60,
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
            <img src={src} alt={src} />
          </div>
        ))}
      </div>
    )
  }
}

export default withStyle(styles)(Pictures)
