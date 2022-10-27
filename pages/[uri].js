import Head from 'next/head';
import TemplateHeader from '../components/TemplateHeader';
import Footer from '../components/Footer';
import { getSinglePage } from '../lib/page';
import { getGeneralSettingsData } from '../lib/general-settings';
import { getThemeSettings } from '../lib/theme-settings';
import { getPrimaryMenu } from '../lib/menus';
import parse from 'html-react-parser';

export default function Page({ pageData, generalSettings, pageSlug, themeSettings, primaryMenu }) {
	const yoastHead = parse(pageData?.seo?.fullHead);

	return (
		<div>
			<Head>
				{yoastHead}
			</Head>
			<TemplateHeader
				className='position-absolute w-100 top-0 start-0'
				currMenu={primaryMenu}
				pageCheck={pageSlug}
				siteSettings={generalSettings}
			/>
			<section className={`content-section hero ${pageSlug}`}>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<h1 className='hero-title text-center'>
								{pageData?.title}
							</h1>
							{pageData?.content && (
								<article
									className='hero-subtitle text-center col'
									dangerouslySetInnerHTML={{
										__html: pageData?.content,
									}}
								></article>
							)}
						</div>
					</div>
				</div>
			</section>
			<Footer social={themeSettings} />
		</div>
	);
}

export async function getStaticProps({ params }) {
	const pageData = await getSinglePage(params);
	const generalSettings = await getGeneralSettingsData();
	const pageSlug = 'page';
	const themeSettings = await getThemeSettings();
	const primaryMenu = await getPrimaryMenu();

	return {
		props: {
			pageData,
			generalSettings,
			pageSlug,
			themeSettings,
			primaryMenu,
		},
	};
}

export async function getStaticPaths() {
	const paths = [];
	return {
		paths,
		fallback: 'blocking',
	};
}