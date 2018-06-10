import React, { Component } from 'react'
import CrossfadeImage from 'components/CrossfadeImage'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import createTypography from '@material-ui/core/styles/createTypography'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    textAlign: 'left'
  },
  gridItem: {
    width: `${100 / 6}%`,
    boxSizing: 'border-box',
    position: 'relative',
    '&:after': {
      content: '""',
      display: 'block',
      paddingBottom: '100%'
    },
    '& img': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  },
  label: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
    padding: 5,
    backgroundColor: 'rgba(255, 255, 255, .7)',
    '& span': {
      color: theme.palette.grey[700]
    }
  },
  title: {
    textAlign: 'center'
  }
})

class Galery extends Component {
  state = {
    mouseOnPicture: null
  }

  render() {
    const { classes, pictures } = this.props
    return (
      <div className={classes.root}>
        {pictures.map((d, i) => (
          <div
            className={classes.gridItem}
            key={d.name}
            onMouseEnter={() => this.setState({ mouseOnPicture: d })}
            onMouseLeave={() => this.setState({ mouseOnPicture: null })}
          >
            <CrossfadeImage
              loadBefore
              src={d.back && this.state.mouseOnPicture === d ? d.back : d.front}
              alt={d.name}
            />
            {this.state.mouseOnPicture === d && (
              <div className={classes.label}>
                <Typography>{d.name && d.name.replace(/_/g, ' ')}</Typography>
              </div>
            )}
          </div>
        ))}
        <div className={[classes.gridItem, classes.title].join(' ')}>
          <Typography>Contact Me</Typography>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Galery)
