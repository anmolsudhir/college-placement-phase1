import { store, wrapper } from '@/store/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Head>
        <title>CMRIT Placement Portral</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
};

export default wrapper.withRedux(App);
