import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
		<>
			<Head>
				<title>Yalie Freebies</title>
				<meta
					name="description"
					content="Take advantage of your newfound collegiate status and save some moolah moolah!"
				></meta>
				<link rel="shortcut icon" href="./favicon.ico" />
				<meta property="og:title" content="Yalie Freebies" />
				<meta
					name="twitter:card"
					content="Take advantage of your newfound collegiate status and save some moolah moolah!"
				/>
				<meta
					property="og:description"
					content="Take advantage of your newfound collegiate status and save some moolah moolah!"
				/>
				<meta property="og:image" content={"./TheShopsatYale.jpg"} />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp