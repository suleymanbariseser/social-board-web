import type { AppProps } from 'next/app';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material';
import theme from '../constants/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles
        styles={{
          '*': {
            boxSizing: 'border-box',
          },
          body: { padding: 0, margin: 0, fontFamily: 'Poppins' },
        }}
      />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
