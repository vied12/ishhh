import { createMuiTheme } from '@material-ui/core/styles';
import primary from '@material-ui/core/colors/deepOrange'
import 'typeface-montserrat-subrayada'

export const fontTitle = "'Montserrat Subrayada', sans-serif;"

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
          ...primary,
        },
      },
      typography: {
        fontFamily: "'Roboto', sans-serif",
        body1: {
          fontWeight: 300,
          fontSize: '1.1rem',
        },
        title: {
          fontWeight: 400,
          fontSize: '1.1rem',
        },
        headline: {
          fontFamily: fontTitle,
        },
        h1: {
          fontFamily: fontTitle,
        },
        h2: {
          fontFamily: fontTitle,
        },
        h3: {
          fontFamily: fontTitle,
          color: 'rgba(0, 0, 0, 0.87)',
          fontSize: '2.8rem',
        },
        h4: {
          fontFamily: fontTitle,
        },
        h5: {
          fontFamily: fontTitle,
        },
      },
      overrides: {
        MuiButton: {
          root: {
            borderRadius: 0,
          },
        },
      },
});

export default theme;
