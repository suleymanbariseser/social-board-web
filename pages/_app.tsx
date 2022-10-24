import type { AppProps } from 'next/app';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material';
import theme from '../constants/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 30_000,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default MyApp;
