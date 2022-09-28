import Head from 'next/head';
import TemplateHeader from '../components/TemplateHeader';
import HomeHero from '../components/HomeHero';
import ServiceSlider from '../components/ServiceSlider';
import WorkGrid from '../components/WorkGrid';
import SkillsList from '../components/SkillsList';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';
// import PostCard from '../components/PostCard';
import { getThemeSettings } from '../lib/theme-settings';
import { getHomepageData } from '../lib/homepage-data';
import { getWorks, getSingleFeaturedWork } from '../lib/work';
import { getPrimaryMenu } from '../lib/menus';

export default function Home({
	themeSettings,
	homepageData,
	posts,
	pageSlug,
	singleFeatWork,
	work,
	primaryMenu,
}) {
	return (
		<>
			<Head>
				<title>Headless WP Next Starter</title>
			</Head>
			<TemplateHeader
				pageCheck={pageSlug}
				className='position-absolute w-100 top-0 start-0'
				currMenu={primaryMenu}
			/>
			<HomeHero social={themeSettings} homeData={homepageData} />
			<ServiceSlider homeData={homepageData} />
			<WorkGrid
				featWork={singleFeatWork}
				work={work}
				homeData={homepageData}
			/>
			<SkillsList homeData={homepageData} />
			<ContactInfo social={themeSettings} homeData={homepageData} />
			<Footer social={themeSettings} />
		</>
	);
}

export async function getStaticProps() {
	// Here we make a call with the client and pass in our query string to the
	// configuration objects 'query' property
	// const response = await client.query({
	// 	query: GET_POSTS,
	// });
	// Once we get the response back, we need to traverse it to pull out the
	// data we want to pass into the HomePage
	// const posts = response?.data?.posts?.nodes;

	// const workresponse = await client.query({
	// 	query: GET_WORK,
	// });
	// const work = workresponse?.data?.caseStudies?.edges;
	const pageSlug = 'home';
	const themeSettings = await getThemeSettings();
	const homepageData = await getHomepageData();
	const work = await getWorks();
	const singleFeatWork = await getSingleFeaturedWork();
	const primaryMenu = await getPrimaryMenu();

	return {
		props: {
			themeSettings,
			homepageData,
			// posts,
			pageSlug,
			work,
			singleFeatWork,
			primaryMenu,
		},
	};
}
