import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps, title }) {
  return( 
    <>
    <Head>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>{title}</title>
    </Head>
  <Component {...pageProps} />
  </>
  )
}

MyApp.defaultProps = {
  title: 'LIHC',
}

export default MyApp
