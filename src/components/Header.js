import React from 'react'
import withStyle from 'react-jss'
import CrossfadeImage from 'components/CrossfadeImage'
import { pictures } from 'pictures'
import logo from 'images/ishhh-NB-MD.png'

const styles = ({
  root: {
    minHeight: '100vh',
    boxSizing: 'border-box',
    position: 'relative',
    marginBottom: 160,
  },
  logoContainer: {
    height: '40vh',
    padding: '10vh',
    boxSizing: 'border-box',
  },
  logo: {
    maxHeight: '100%',
  },
  images: {
    height: '60vh',
    display: 'flex',
    '& img': {
      objectFit: 'cover',
      objectPosition: '50% 50%',
    },
  },

})

class Header extends React.Component {
  state = {
    imageIndex: 0,
  }

  componentDidMount = () => {
    this.changeInterval = setInterval(this.changeImage, 4000)
  }

  changeImage = () => {
    this.setState({ imageIndex: (this.state.imageIndex + 3) % pictures.length })
  }

  render() {
    const  { classes } = this.props
    const  { imageIndex } = this.state
    return (
      <header className={classes.root}>
        <div className={classes.logoContainer}>
          <img src={logo} alt="ISHHH" className={classes.logo} />
        </div>
        <div className={classes.images}>
          <CrossfadeImage duration={2000} delay={500} src={pictures[(imageIndex + 0) % pictures.length]} style={{ width: '33.33%'}} imgStyle={{width: '100%', height: '100%'}} />
          <CrossfadeImage
            duration={2000}
            delay={1000}
            src={pictures[(imageIndex + 1) % pictures.length]}
            style={{
              width: '33.33%',
              borderLeft: '10px solid white',
              borderRight: '10px solid white',
            }}
              imgStyle={{width: '100%', height: '100%'}} />
          <CrossfadeImage duration={2000} delay={1500} src={pictures[(imageIndex + 2) % pictures.length]} style={{ width: '33.33%'}} imgStyle={{width: '100%', height: '100%'}} />
        </div>
      </header>
    )
  }
}


export default withStyle(styles)(Header)