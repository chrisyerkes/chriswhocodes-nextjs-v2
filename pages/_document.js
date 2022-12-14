import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		const setInitialTheme = `
      function getUserPreference() {
        if(window.localStorage.getItem('theme')) {
          return window.localStorage.getItem('theme')
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches 
          ? 'dark-mode' 
          : 'light-mode'
      }
      document.body.dataset.theme = getUserPreference();
			document.body.classList.add(getUserPreference());
    `;
		return (
			<Html>
				<Head>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
					<link rel="manifest" href="/site.webmanifest"></link>
					<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"></link>
					<meta name="msapplication-TileColor" content="#da532c"></meta>
					<meta name="theme-color" content="#ffffff"></meta>
					<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
					<link
						rel='preconnect'
						href='https://fonts.googleapis.com'
					></link>
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='anonymous'
					></link>
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap'
					></link>
					<link rel='icon' href='/favicon.ico'></link>
				</Head>
				<body>
					<script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
