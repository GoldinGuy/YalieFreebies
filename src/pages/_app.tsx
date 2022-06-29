import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/index.css'
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome, faAmazon } from "@fortawesome/free-brands-svg-icons";

// library.add(fas, faAmazon);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS TailwindCSS TypeScript Starter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp