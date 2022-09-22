import { client } from '../../lib/apollo';
import { gql } from '@apollo/client';

import Head from 'next/head';
import TemplateHeader from '../../components/TemplateHeader';
// import HomeHero from '../components/HomeHero';
import ContactInfo from '../../components/ContactInfo';
import Footer from '../../components/Footer';
// import PostCard from '../components/PostCard';
import { getWorks, getSingleFeaturedWork } from '../../lib/work';

export default function SlugPage({ caseStudy }) {
	return (
		<div>
			<Head>
				<title>Headless WP Next Starter</title>
				<link rel='icon' href='favicon.ico'></link>
			</Head>

			<main>
				<div className='siteHeader'>
					<h1 className='title'>{caseStudy.caseStudyTitle}</h1>
					<p>
						✍️ &nbsp;&nbsp;
						{/* {`${post.author.node.firstName} ${post.author.node.lastName}`}{' '} */}
						| 🗓️ &nbsp;&nbsp;
						{/* {new Date(post.date).toLocaleDateString()} */}
					</p>
				</div>
				<article
					dangerouslySetInnerHTML={{
						__html: caseStudy.projectMiniDescription,
					}}
				></article>
			</main>

			<Footer></Footer>
		</div>
	);
}

export async function getStaticProps({ params }) {
	const GET_CASE_STUDY = gql`
		query GetCaseStudyBySlug($id: ID!) {
			caseStudy(id: $id, idType: SLUG) {
				caseStudyTitle
				projectMiniDescription
			}
		}
	`;
	const response = await client.query({
		query: GET_CASE_STUDY,
		variables: {
			id: params.slug,
		},
	});
	const caseStudy = response?.data?.caseStudy;
	return {
		props: {
			caseStudy,
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
