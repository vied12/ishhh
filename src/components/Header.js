import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import CrossfadeImage from 'components/CrossfadeImage'
import { pictures } from 'pictures'
import logo from 'images/ishhh-NB-MD.png'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const goDownAnimationId =
  'goDownAnimationId' + Math.floor(Math.random() * Math.pow(10, 10))
const rotateId = 'rotateId' + Math.floor(Math.random() * Math.pow(10, 10))

const styles = {
  root: {
    boxSizing: 'border-box',
    position: 'relative',
    marginBottom: 160,
  },
  logoContainer: {
    padding: '5vh',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  logo: {
    maxHeight: '87%',
    animation: `${rotateId} 5s infinite`,
    animationDelay: 2500,
  },
  subLogo: {
    fontFamily: "'Amatic SC', cursive",
    fontWeight: 700,
    fontSize: '2.3rem',
  },
  images: {
    display: 'flex',
    '& img': {
      objectFit: 'cover',
      objectPosition: 'top 50%',
    },
  },
  goDown: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: [[0, 'auto']],
    zIndex: 3,
    color: 'white',
    width: 50,
    height: 50,
    minHeight: 'unset',
    minWidth: 'unset',
    padding: 'unset',
    animation: `${goDownAnimationId} 1s infinite`,
  },
  [`@keyframes ${goDownAnimationId}`]: {
    '0%, 100%': {
      transform: 'translate(0, 25%)',
    },
    '50%': {
      transform: 'translate(0, 0%)',
    },
  },
  [`@keyframes ${rotateId}`]: {
    '0%, 90%, 100%': {
      transform: 'scale(1)',
    },
    '95%': {
      transform: 'scale(1.05)',
    },
  },
}

const waitForImage = src =>
  new Promise(resolve => {
    const img = new Image()
    img.src = src
    img.onload = () => resolve()
  })

class Header extends React.Component {
  state = {
    imageIndex: 0,
    height: 0,
  }

  promise = Promise.resolve()

  componentDidMount = () => {
    this.startTimeout()
  }

  nextImage = () => {
    this.promise.then(() => {
      this.setState(
        {
          imageIndex: (this.state.imageIndex + 3) % pictures.length,
        },
        () => {
          this.startTimeout()
        },
      )
    })
  }

  startTimeout = () => {
    // wait for the next images
    this.promise = Promise.all(
      [0, 1, 2].map(i =>
        waitForImage(
          pictures[(this.state.imageIndex + i + 3) % pictures.length],
        ),
      ),
    )
    this.changeInterval = setTimeout(this.nextImage, 5000)
  }

  resetIntervalAndGoNext = () => {
    if (this.changeInterval) {
      clearTimeout(this.changeInterval)
    }
    this.nextImage()
  }

  scrollDown = () => {
    window.scroll({
      top: window.innerHeight - 50,
      left: 0,
      behavior: 'smooth',
    })
  }

  componentWillMount = () => {
    window.addEventListener('resize', this.setHeight)
    this.setHeight()
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.setHeight)
  }

  setHeight = () => {
    this.setState({ height: window.innerHeight })
  }

  render() {
    const { classes } = this.props
    const { imageIndex, height } = this.state
    return (
      <header className={classes.root}>
        <div className={classes.logoContainer} style={{ height: height * 0.3 }}>
          <img src={logo} alt="ISHHH" className={classes.logo} />
          <Typography variant="display1" className={classes.subLogo}>
            Online shop
          </Typography>
        </div>
        <div
          className={classes.images}
          onClick={this.resetIntervalAndGoNext}
          style={{ height: height * 0.7 }}
        >
          <CrossfadeImage
            duration={2000}
            delay={0}
            src={pictures[(imageIndex + 0) % pictures.length]}
            style={{ width: '33.33%' }}
            imgStyle={{ width: '100%', height: '100%' }}
          />
          <CrossfadeImage
            duration={2000}
            delay={500}
            src={pictures[(imageIndex + 1) % pictures.length]}
            style={{
              width: '33.33%',
              borderLeft: '2vw solid transparent',
              borderRight: '2vw solid transparent',
            }}
            imgStyle={{ width: '100%', height: '100%' }}
          />
          <CrossfadeImage
            duration={2000}
            delay={1000}
            src={pictures[(imageIndex + 2) % pictures.length]}
            style={{ width: '33.33%' }}
            imgStyle={{ width: '100%', height: '100%' }}
          />
        </div>
        <Button className={classes.goDown} onClick={this.scrollDown}>
          <KeyboardArrowDown style={{ width: 50, height: 50 }} />
        </Button>
      </header>
    )
  }
}

export default withStyles(styles)(Header)
