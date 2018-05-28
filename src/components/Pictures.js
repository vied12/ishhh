import React, { Component } from 'react'
import { pictures } from 'pictures'
import withStyle from 'react-jss'

const styles = ({
  root: {
    marginTop: 100,
    marginBottom: 100,
    padding: 40,
    paddingTop: 80,
    backgroundColor: 'tomato',
    display: 'flex',
    // flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridItem: {
    transition: 'all .75s',
    '&:hover': {
      flexShrink: 0,
    },
    marginBottom: 40,
    marginRight: 0,
    // width: 300,
    height: 300,
    '& img': {
      width: '100%',
      height: '100%',
      // borderRadius: 20,
      objectFit: 'cover',
      boxShadow: [0, 0, 25, 'rgba(0, 0, 0, 0.2)']
    }
  }
})

class Pictures extends Component {

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        {pictures.map(((src, i) => (
          <div className={classes.gridItem} key={src}>
            <img src={src} alt="ISHHH" />
          </div>
        )))}
      </div>
    )
  }
}

export default withStyle(styles)(Pictures)
