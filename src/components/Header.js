import React from 'react'
import withStyle from 'react-jss'
import CrossfadeImage from 'components/CrossfadeImage'
import { pictures } from 'pictures'
import logo from 'images/ishhh-NB-MD.png'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import Button from '@material-ui/core/Button'

const goDownAnimationId = 'goDownAnimationId' + Math.floor(Math.random() * Math.pow(10, 10))
const rotateId = 'rotateId' + Math.floor(Math.random() * Math.pow(10, 10))

const styles = ({
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
    maxHeight: '100%',
    animation: `${rotateId} 5s infinite`,
    animationDelay: 2500,
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
    margin: [0, 'auto'],
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
    // '95%': {
    //   transform: 'scale(1.1)',
    // },
    '95%': {
      transform: 'scale(1.05)',
    },
  },
})

class Header extends React.Component {
  state = {
    imageIndex: 0,
    height: 0,
  }

  componentDidMount = () => {
    this.startInterval()
  }

  nextImage = () => {
    this.setState({ imageIndex: (this.state.imageIndex + 3) % pictures.length })
  }

  startInterval = () => {
    this.changeInterval = setInterval(this.nextImage, 5000)
  }
  resetIntervalAndGoNext = () => {
    if (this.changeInterval) {
      clearInterval(this.changeInterval)
    }
    this.nextImage()
    this.startInterval()
  }

  scrollDown = () => {
    window.scroll({
      top: window.innerHeight - 50,
      left: 0,
      behavior: 'smooth'
    })
  }

  componentWillMount = () => {
    window.addEventListener('resize', this.setHeight)
    this.setHeight()
  }

  setHeight = () => {
    this.setState({ height: window.innerHeight })
  }



  render() {
    const  { classes } = this.props
    const  { imageIndex, height } = this.state
    return (
      <header className={classes.root}>
        <div className={classes.logoContainer} style={{ height: height * 0.3 }}>
          <img src={logo} alt="ISHHH" className={classes.logo} />
        </div>
        <div className={classes.images} onClick={this.resetIntervalAndGoNext}  style={{ height: height * 0.7 }}>
          <CrossfadeImage
            duration={2000}
            delay={0}
            src={pictures[(imageIndex + 0) % pictures.length]}
            style={{ width: '33.33%'}}
            imgStyle={{ width: '100%', height: '100%' }}
          />
          <CrossfadeImage
            duration={2000}
            delay={500}
            src={pictures[(imageIndex + 1) % pictures.length]}
            style={{
              width: '33.33%',
              // top: 20,
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
        <Button className={classes.goDown}
          onClick={this.scrollDown}
        >
          <KeyboardArrowDown style={{ width: 50, height: 50 }}/>
        </Button>
      </header>
    )
  }
}


export default withStyle(styles)(Header)
