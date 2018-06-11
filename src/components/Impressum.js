import React, { Component } from 'react'
import Footer from 'components/Footer'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    textAlign: 'center',
    maxWidth: 800,
    margin: [[0, 'auto']],
  },
}

class Impressum extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Typography gutterBottom variant="display3">
          Impressum
        </Typography>
        <Typography gutterBottom>ISHHH</Typography>
        <Typography gutterBottom>Mail: contact (at) ishhh.de</Typography>
        <Typography gutterBottom variant="display1">
          Liability for Content
        </Typography>
        <Typography gutterBottom>
          The content of our websites was created with great care. We can’t take
          any guarantee for the accuracy, completeness and timeliness of the
          content. As a service provider we are responsible for the content of
          these pages according to § 7 paragraph 1 of the TMG. According to §§ 8
          to 10 of the TMG we as service providers are not obliged to monitor
          transmitted or stored information or to investigate circumstances that
          indicate illegal activity. Responsibility for the removal or blocking
          of the use of information under general legal provisions is
          unaffected. A liability is only possible from the date of knowledge of
          a specific infringement. Upon notification of such violations, we will
          remove the content immediately.
        </Typography>
        <Typography gutterBottom variant="display1">
          Liability for Links
        </Typography>
        <Typography gutterBottom>
          Our site contains links to external websites over which we have no
          control; therefore we cannot accept any liability for these websites.
          The respective provider or operator is responsible for the content of
          the linked sites. The linked sites were checked at the time of linking
          for possible violations, and illegal content was not present at the
          time the link was set on our site. A permanent control of the linked
          pages is unreasonable without concrete evidence of a violation of law.
          Upon notification of violations, we will immediately remove such
          links.
        </Typography>
        <Typography gutterBottom variant="display1">
          Copyright
        </Typography>
        <Typography gutterBottom>
          The content and other work on these websites are subject to German
          copyright. The reproduction, adaptation, distribution or any kind of
          exploitation outside the limits of copyright require the written
          consent of the respective author. Downloads and copies of these pages
          are only permitted for private, non-commercial use. Insofar as the
          content on this site is created by the operator, the copyrights of
          third parties are respected (in particular the content of third
          parties is identified as such). Please notify us should you become
          aware of any copyright infringement, and we will remove the content
          immediately upon notification of any violations.
        </Typography>
        <Footer />
      </div>
    )
  }
}

export default withStyles(styles)(Impressum)
