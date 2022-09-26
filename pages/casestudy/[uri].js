import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TemplateHeader from '../../components/TemplateHeader';
import ContactInfo from '../../components/ContactInfo';
import Footer from '../../components/Footer';
import { getCaseStudy } from '../../lib/individual-case-study';

export default function SlugPage({ caseStudy }) {
	return (
		<>
			<Head>
				<title>Headless WP Next Starter</title>
			</Head>
			<TemplateHeader className='position-absolute w-100 top-0 start-0' />
			<section className='content-section case-study-header hero'>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<h1 className='case-study-title'>
								{caseStudy?.caseStudyTitle}
							</h1>
							<article
								className='col-10'
								dangerouslySetInnerHTML={{
									__html: caseStudy?.introduction,
								}}
							></article>
						</div>
					</div>
					<div className='row'>
						<div className='col-4'>
							<h4>Industry</h4>
							<ul className='industry-list'>
								{caseStudy?.industry.map((el) => {
									return <li key={el}>{el}</li>;
								})}
							</ul>
						</div>
						<div className='col-4'>
							<h4>Tech Stack</h4>
							<ul className='checkstack-list'>
								{caseStudy?.stack.map((tech) => {
									return <li key={tech}>{tech}</li>;
								})}
							</ul>
						</div>
						<div className='col-4'>
							<h4>Project Link</h4>
							<a
								href={caseStudy?.projectLink}
								className='btn btn-link has-arrow-right has-gradient-1'
							>
								View Project{' '}
								<FontAwesomeIcon icon={faArrowRight} />
							</a>
						</div>
					</div>
				</div>
			</section>
			<section className='content-section project-goals'>
				<div className='container'>
					<div className='row'>
						<div className='col project-goals-featured-image'>
							<img
								srcSet={caseStudy?.mainImage?.srcSet}
								src={caseStudy?.mainImage?.sourceUrl}
								className='img-fluid'
								alt={caseStudy?.mainImage?.altText}
							/>
						</div>
					</div>
					<div className='row'>
						<article
							className='col-10 project-goals-text'
							dangerouslySetInnerHTML={{
								__html: caseStudy?.projectGoals,
							}}
						></article>
					</div>
				</div>
			</section>
			<ContactInfo />
			<Footer />
		</>
	);
}

export async function getStaticProps({ params }) {
	// const GET_CASE_STUDY = gql`
	// 	query GetCaseStudyBySlug($id: ID!) {
	// 		caseStudy(id: $id, idType: URI) {
	// 			caseStudyTitle
	// 			projectMiniDescription
	// 			introduction
	// 			industry
	// 			stack
	// 			projectLink
	// 			mainImage {
	// 				altText
	// 				srcSet(size: LARGE)
	// 				sourceUrl
	// 			}
	// 			projectGoals
	// 			projectTechnology
	// 			imageGallery {
	// 				altText
	// 				caption
	// 				sourceUrl
	// 				srcSet
	// 			}
	// 			developmentProcess
	// 			finalImage {
	// 				altText
	// 				sourceUrl(size: LARGE)
	// 				srcSet(size: LARGE)
	// 			}
	// 			results
	// 			otherProjects {
	// 				edges {
	// 					node {
	// 						caseStudyTitle
	// 						featuredImage {
	// 							node {
	// 								altText
	// 								sourceUrl
	// 								srcSet
	// 							}
	// 						}
	// 						slug
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// `;
	// const response = await client.query({
	// 	query: GET_CASE_STUDY,
	// 	variables: {
	// 		id: params.uri,
	// 	},
	// });
	// const caseStudy = response?.data?.caseStudy;
	const caseStudy = await getCaseStudy(params);

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
