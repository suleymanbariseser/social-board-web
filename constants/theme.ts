import '@fontsource/poppins';
import { createTheme, responsiveFontSizes } from '@mui/material';

const createResponsiveFontSize = (desktop: number, mobile: number) => ({
  fontSize: desktop,
  '@media (min-width:600px)': {
    fontSize: mobile,
  },
});

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    h1: {
      ...createResponsiveFontSize(35, 28),
      fontWeight: 'bold',
    },
    h2: {
      ...createResponsiveFontSize(32, 26),
      fontWeight: 'bold',
    },
    h3: {
      ...createResponsiveFontSize(30, 24),
      fontWeight: 'bold',
    },
    h4: {
      ...createResponsiveFontSize(28, 22),
      fontWeight: 'bold',
    },
    h5: {
      ...createResponsiveFontSize(26, 20),
      fontWeight: 'bold',
    },
    h6: {
      ...createResponsiveFontSize(24, 18),
      fontWeight: 'bold',
    },
    subtitle1: {
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: '#A974FF',
    },
    background: {
      default: '#EDF3FC',
      paper: '#ECEFF7',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: 'none',
          padding: 12
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '8px !important',
          '&:after, &:before': {
            display: 'none',
          },
        },
        input: {
          paddingTop: '8.5px !important',
          paddingBottom: '8.5px !important'
        }
      },
    },
  },
  spacing: 4,
});

export default theme;
