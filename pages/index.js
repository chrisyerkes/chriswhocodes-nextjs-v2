import { client } from '../lib/apollo';
import { gql } from '@apollo/client';

import Head from 'next/head';
import TemplateHeader from '../components/TemplateHeader';
import HomeHero from '../components/HomeHero';
import ServiceSlider from '../components/ServiceSlider';
import WorkGrid from '../components/WorkGrid';
import SkillsList from '../components/SkillsList';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';
// import PostCard from '../components/PostCard';
import { getAllPosts } from '../lib/test-data';

export default function Home({ posts, work }) {
	return (
		<>
			<Head>
				<title>Headless WP Next Starter</title>
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
				<link rel='icon' href='favicon.ico'></link>
			</Head>
			<TemplateHeader className='position-absolute w-100 top-0 start-0' />
			<HomeHero />
			<ServiceSlider />
			<WorkGrid work={work} />
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
			{console.log(work)}
			<Footer />
		</>
	);
}

export async function getStaticProps() {
	const GET_WORK = gql`
		query AllWorks {
			caseStudies(first: 10000, where: { hasPassword: false }) {
				edges {
					node {
						caseStudyTitle
						slug
						caseStudyId
						finalImage {
							mediaItemUrl
						}
						modified
					}
				}
			}
		}
	`;
	// Paste your GraphQL query inside of a gql tagged template literal
	const GET_POSTS = gql`
		query AllPostsQuery {
			posts {
				nodes {
					title
					content
					date
					uri
				}
			}
		}
	`;
	// Here we make a call with the client and pass in our query string to the
	// configuration objects 'query' property
	const response = await client.query({
		query: GET_POSTS,
	});
	// Once we get the response back, we need to traverse it to pull out the
	// data we want to pass into the HomePage
	const posts = response?.data?.posts?.nodes;

	const workresponse = await client.query({
		query: GET_WORK,
	});
	const work = workresponse?.data?.caseStudies?.edges;

	return {
		props: {
			posts,
			work,
		},
	};
}
