import React, { Component } from 'react'
import withStyle from 'react-jss'

const styles = ({
  root: {
    marginTop: 20,
    marginBottom: 150,
    paddingTop: 60,
    paddingBottom: 60,
    backgroundColor: 'tomato',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: [0, 0, 10, 'rgba(0, 0, 0, .5)'],
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
      boxShadow: [0, 0, 25, 'rgba(0, 0, 0, 0.2)']
    }
  }
})

class Pictures extends Component {

  render() {
    const { classes, pictures, } = this.props
    return (
      <div className={classes.root}>
        {pictures.map(((src, i) => (
          <div className={classes.gridItem} key={src}>
            <img src={src} alt={src} />
          </div>
        )))}
      </div>
    )
  }
}

export default withStyle(styles)(Pictures)
