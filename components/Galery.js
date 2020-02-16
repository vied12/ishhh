import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import classNames from 'classnames'
import Link from 'next/link'
import LazyLoad from 'react-lazyload'
import ShopIcon from '@material-ui/icons/ShoppingBasket'
import { useSelector } from 'react-redux'
import compose from 'recompose/compose'
import {fontTitle } from '../config/theme'

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
    overflow: 'hidden',
    '&:after': {
      content: '""',
      display: 'block',
      paddingBottom: '100%',
    },
    '& img': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      transition: 'all .75s',
      objectFit: 'cover',
    },
    '&:hover': {
      '& img': {
        transform: 'scale(1.1)',
      },
      '& $label': {
        opacity: 1,
      },
    },
  },
  label: {
    position: 'absolute',
    textAlign: 'center',
    left: 0,
    right: 0,
    bottom: 0,
    padding: [[5, 10]],
    backgroundColor: 'rgba(255, 255, 255, .9)',
    opacity: 0,
    transition: 'all .25s',
    '& p': {
      color: theme.palette.grey[700],
    },
    [theme.breakpoints.down('sm')]: {
      opacity: 1,
    },
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'unset',
    '& > *': {
      width: '100%',
      fontFamily: fontTitle,
      height: '100%',
      fontSize: '2.5rem',
      '&:hover': {
        color: 'white',
      },
    },
  },
  shopIcon: {
    color: theme.palette.text.secondary,
    verticalAlign: 'middle',
    padding: [[0, 20]],
  },
})

const SIZES = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 3,
  xl: 6,
}

const Galery = ({ classes, width }) => {
  const inventory = useSelector(state => state.inventory.data)
  const getSizes = key => {
    const item = inventory.find(d => d.key === key)
    if (!item.sizes) {
      return []
    }
    return item && item.sizes.length > 0 ? item.sizes : ['SOLD OUT']
  }

  return (
    <div className={classes.root}>
      {inventory
        .filter(d => !!d.key)
        .map((d, i) => (
          <Link
            href={`/details/[pid]`}
            as={`/details/${d.key}`}
            key={i}
            >
            <a
            className={classes.gridItem}
            style={{ width: `${100 / SIZES[width]}%` }}
            >
            <LazyLoad once offset={500} height="100%">
              <img src={d.front} alt={d.name} />
            </LazyLoad>
            <div className={classNames(classes.label)}>
              <Typography>{d.name}</Typography>
              {d.price && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography>{d.price}&nbsp;€</Typography>
                  <ShopIcon className={classes.shopIcon} />
                  {getSizes(d.key).map(s => (
                    <Chip key={s} label={s} style={{ marginRight: 10 }} />
                  ))}
                </div>
              )}
            </div>
            </a>
          </Link>
        ))}
      <div
        className={[classes.gridItem, classes.title].join(' ')}
        style={{ width: `${100 / SIZES[width]}%` }}
      >
        <Button
          variant="contained"
          target="_blank"
          rel="nofollow noreferrer noopener"
          href="https://m.me/ishhhliebedich"
        >
          Contact Me
        </Button>
      </div>
    </div>
  )
}

export default compose(withWidth(), withStyles(styles))(Galery)
