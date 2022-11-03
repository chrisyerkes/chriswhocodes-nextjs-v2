import { client } from '../lib/apollo';
import { gql } from '@apollo/client';

export const GET_CASE_STUDY = gql`
	query GetCaseStudyBySlug($id: ID!) {
		caseStudy(id: $id, idType: URI) {
			seo {
				fullHead
			}
			caseStudyTitle
			projectMiniDescription
			introduction
			industry
			stack
			projectLink
			mainImage {
				altText
				srcSet(size: LARGE)
				sourceUrl
				mediaDetails {
					height
					width
				}
			}
			mainMobileImage {
				altText
				srcSet(size: LARGE)
				sourceUrl
				mediaDetails {
					height
					width
				}
			}
			projectGoals
			projectTechnology
			miniGallery {
				altText
				sourceUrl
				srcSet(size: LARGE)
				id
				mediaDetails {
					height
					width
				}
			}
			mobileImageCarousel {
				altText
				sourceUrl
				srcSet(size: LARGE)
				id
				mediaDetails {
					height
					width
				}
			}
			developmentProcess
			finalImage {
				altText
				sourceUrl
				srcSet(size: LARGE)
				mediaDetails {
					height
					width
				}
			}
			results
			otherProjects(first: 2) {
				edges {
					node {
						caseStudyTitle
						projectMiniDescription
						featuredImage {
							node {
								altText
								sourceUrl
								srcSet
								mediaDetails {
									height
									width
								}
							}
						}
						slug
						uri
					}
				}
			}
		}
	}
`;

export async function getCaseStudy(params) {
	const theCaseStudy = await client.query({
		query: GET_CASE_STUDY,
		variables: {
			id: params.uri,
		},
	});
	const caseStudy = theCaseStudy?.data?.caseStudy;

	return caseStudy;
}
