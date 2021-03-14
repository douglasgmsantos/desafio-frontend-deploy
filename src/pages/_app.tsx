import { AppProps } from 'next/app';

import GlobalStyle from '../../styles/global';
import AppProvider from '../hooks';
import Header from '../Components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default MyApp
