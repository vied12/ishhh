import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import getData from 'data'

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
    '&:hover': {
      '& $label': {
        opacity: 1,
      },
    },
  },
  label: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
    padding: 5,
    backgroundColor: 'rgba(255, 255, 255, .9)',
    opacity: 0,
    transition: 'all .25s',
    '& p': {
      color: theme.palette.grey[700],
    },
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      width: '100%',
      fontFamily: "'Amatic SC', cursive",
      height: '100%',
      fontSize: '2.5rem',
      '&:hover': {
        color: 'white',
      },
    },
  },
})

const SIZES = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 3,
  xl: 6,
}

class Galery extends Component {
  state = {
    stocks: [],
  }

  componentWillMount = () => {
    getData().then(d => {
      this.setState({ stocks: d })
    })
  }

  getSizes = key => {
    const item = this.state.stocks.find(d => d.key === key)
    return item && item.sizes.length > 0 ? item.sizes : ['SOLD OUT']
  }

  render() {
    const { classes, width } = this.props
    const { stocks } = this.state

    return (
      <div className={classes.root}>
        {stocks.filter(d => !!d.key).map((d, i) => (
          <Link
            to={`/${d.key}`}
            className={classes.gridItem}
            style={{ width: `${100 / SIZES[width]}%` }}
            key={d.key}
          >
            <img src={d.front} alt={d.name} />
            <div className={classNames(classes.label)}>
              <Typography>{d.name}</Typography>
              {this.getSizes(d.key).map(s => (
                <Chip key={s} label={s} style={{ marginRight: 10 }} />
              ))}
            </div>
          </Link>
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
