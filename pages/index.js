import Head from 'next/head';
import TemplateHeader from '../components/TemplateHeader';
import HomeHero from '../components/HomeHero';
import ServiceSlider from '../components/ServiceSlider';
import WorkGrid from '../components/WorkGrid';
import SkillsList from '../components/SkillsList';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';
// import PostCard from '../components/PostCard';
import { getWorks, getSingleFeaturedWork } from '../lib/work';

export default function Home({ posts, pageSlug, singleFeatWork, work }) {
	// const currentPage = 'home';
	return (
		<>
			<Head>
				<title>Headless WP Next Starter</title>
			</Head>
			<TemplateHeader
				pageCheck={pageSlug}
				className='position-absolute w-100 top-0 start-0'
			/>
			<HomeHero />
			<ServiceSlider />
			<WorkGrid featWork={singleFeatWork} work={work} />
			<SkillsList />
			<ContactInfo />
			{/* <main>
				<h1 className='title'>Headless WordPress Next.js Starter</h1>

				<p className='description'>
					Get started by editing <code>pages/index.js</code>
				</p>

				<div className='grid'>
					{posts.map((post) => {
						return <PostCard key={post.uri} post={post}></PostCard>;
					})}
				</div>
				</main> */}
			{/* {console.log(work)} */}
			<Footer />
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
	const work = await getWorks();
	const singleFeatWork = await getSingleFeaturedWork();

	return {
		props: {
			// posts,
			pageSlug,
			work,
			singleFeatWork,
		},
	};
}
