import React from 'react'
import withStyle from 'react-jss'
import CrossfadeImage from 'components/CrossfadeImage'
import { pictures } from 'pictures'
import logo from 'images/ishhh-NB-MD.png'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import Button from '@material-ui/core/Button'

const styles = ({
  root: {
    minHeight: '100vh',
    boxSizing: 'border-box',
    position: 'relative',
    marginBottom: 160,
  },
  logoContainer: {
    height: '30vh',
    padding: '5vh',
    boxSizing: 'border-box',
  },
  logo: {
    maxHeight: '100%',
  },
  images: {
    height: '70vh',
    display: 'flex',
    '& img': {
      objectFit: 'cover',
      objectPosition: '50% 50%',
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
  }
})

class Header extends React.Component {
  state = {
    imageIndex: 0,
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

  render() {
    const  { classes } = this.props
    const  { imageIndex } = this.state
    return (
      <header className={classes.root}>
        <div className={classes.logoContainer}>
          <img src={logo} alt="ISHHH" className={classes.logo} />
        </div>
        <div className={classes.images} onClick={this.resetIntervalAndGoNext}>
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
              top: 25,
              borderLeft: '10px solid white',
              borderRight: '10px solid white',
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
