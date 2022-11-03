import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { client } from '../lib/apollo';
import Script from 'next/script';

import '../styles/html-scss/vendor.scss';
// import '../styles/index.css';

config.autoAddCss = false;

function ChrisWhoCodesApp({ Component, pageProps }) {
	useEffect(() => {
		require('../public/static-assets/js/bootstrap.bundle.min.js');
	}, []);

	return (
		<>
			<Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-361DLPVGR7" />
			<Script
				id='google-analytics'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-361DLPVGR7', {
							page_path: window.location.pathname,
						});
					`,
				}}
			/>
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		</>
	);
}

export default ChrisWhoCodesApp;
