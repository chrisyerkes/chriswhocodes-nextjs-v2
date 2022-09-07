import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { client } from '../lib/apollo';

import '../styles/html-scss/vendor.scss';
// import '../styles/index.css';

config.autoAddCss = false;

function ChrisWhoCodesApp({ Component, pageProps }) {
	useEffect(() => {
		require('../public/static-assets/js/bootstrap.bundle.min.js');
	}, []);

	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default ChrisWhoCodesApp;
