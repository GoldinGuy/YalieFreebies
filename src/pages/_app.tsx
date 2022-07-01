import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/index.css'
import Script from 'next/script';

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
				{process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL &&
					process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
						<Script
							src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
							data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
							strategy="lazyOnload"
						/>
					)}
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp