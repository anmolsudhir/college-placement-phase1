import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CMRIT Placement Portral</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
