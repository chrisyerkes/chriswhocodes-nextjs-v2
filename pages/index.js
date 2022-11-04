import Head from 'next/head';
import TemplateHeader from '../components/TemplateHeader';
import HomeHero from '../components/HomeHero';
import ServiceSlider from '../components/ServiceSlider';
import WorkGrid from '../components/WorkGrid';
import CaseStudyList from '../components/PaginatedCasestudies';
import SkillsList from '../components/SkillsList';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';
// import PostCard from '../components/PostCard';
import { getFrontpageSettingsData } from '../lib/frontpage-settings';
import { getGeneralSettingsData } from '../lib/general-settings';
import { getThemeSettings } from '../lib/theme-settings';
import { getHomepageData } from '../lib/homepage-data';
import { getAllServices } from '../lib/services';
import {
	getWorks,
	getSingleFeaturedWork,
	getFirstFourWorks,
} from '../lib/work';
import { getAllSkills } from '../lib/skills';
import { getPrimaryMenu } from '../lib/menus';
import parse from 'html-react-parser';
import PaginatedCasestudies from '../components/PaginatedCasestudies';

export default function Home({
	frontpageSettings,
	generalSettings,
	themeSettings,
	homepageData,
	posts,
	pageSlug,
	services,
	singleFeatWork,
	firstFourWorks,
	work,
	skills,
	primaryMenu,
}) {
	const rawSEO = frontpageSettings?.seo?.fullHead;
	const cleanedSEO = rawSEO.replace('admin.chriswho.codes', 'chriswho.codes');
	const wImageSEO = cleanedSEO.replace('https://chriswho.codes/wp-content/uploads/', 'https://admin.chriswho.codes/wp-content/uploads/');
	const yoastHead = parse(wImageSEO);
	return (
		<>
			<Head>
				{yoastHead}
			</Head>
			<TemplateHeader
				pageCheck={pageSlug}
				className='position-absolute w-100 top-0 start-0'
				currMenu={primaryMenu}
				siteSettings={generalSettings}
			/>
			<HomeHero social={themeSettings} homeData={homepageData} />
			<ServiceSlider homeData={homepageData} serviceData={services} />
			<WorkGrid
				featWork={singleFeatWork}
				work={work}
				homeData={homepageData}
			/>
			{/* <PaginatedCasestudies
				featWork={singleFeatWork}
				work={work}
				homeData={homepageData}
			/> */}
			<SkillsList homeData={homepageData} skillList={skills} />
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
	const frontpageSettings = await getFrontpageSettingsData();
	const generalSettings = await getGeneralSettingsData();
	const themeSettings = await getThemeSettings();
	const homepageData = await getHomepageData();
	const services = await getAllServices();
	const work = await getWorks();
	const singleFeatWork = await getSingleFeaturedWork();
	const firstFourWorks = await getFirstFourWorks();
	const skills = await getAllSkills();
	const primaryMenu = await getPrimaryMenu();

	return {
		props: {
			frontpageSettings,
			generalSettings,
			themeSettings,
			homepageData,
			// posts,
			pageSlug,
			services,
			work,
			singleFeatWork,
			firstFourWorks,
			skills,
			primaryMenu,
		},
	};
}
