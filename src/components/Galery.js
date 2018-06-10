import React, { Component } from 'react'
import CrossfadeImage from 'components/CrossfadeImage'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    textAlign: 'left',
  },
  gridItem: {
    width: `${100 / 6}%`,
    boxSizing: 'border-box',
    position: 'relative',
    '&:after': {
      content: '""',
      display: 'block',
      paddingBottom: '100%',
    },
    '& img': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  label: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
    padding: 5,
    backgroundColor: 'rgba(255, 255, 255, .7)',
    '& p': {
      color: theme.palette.grey[700],
    },
  },
  title: {
    // textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      width: '100%',
      height: '100%',
      fontSize: '1.2rem',
    },
  },
})

const SIZES = {
  xs: 1,
  sm: 2,
  md: 4,
  lg: 6,
  xl: 12,
}

class Galery extends Component {
  state = {
    mouseOnPicture: null,
  }

  render() {
    const { classes, pictures, width } = this.props
    return (
      <div className={classes.root}>
        {pictures.map((d, i) => (
          <div
            className={classes.gridItem}
            style={{ width: `${100 / SIZES[width]}%` }}
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
        <div
          className={[classes.gridItem, classes.title].join(' ')}
          style={{ width: `${100 / SIZES[width]}%` }}
        >
          <Button
            color="primary"
            variant="contained"
            href="https://m.me/ishhhliebedich"
          >
            Contact Me
          </Button>
        </div>
      </div>
    )
  }
}

export default withWidth()(withStyles(styles)(Galery))
