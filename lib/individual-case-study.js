import { client } from '../lib/apollo';
import { gql } from '@apollo/client';

export const GET_CASE_STUDY = gql`
	query GetCaseStudyBySlug($id: ID!) {
		caseStudy(id: $id, idType: URI) {
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
			}
			projectGoals
			projectTechnology
			imageGallery {
				altText
				sourceUrl
				srcSet
				id
			}
			developmentProcess
			finalImage {
				altText
				sourceUrl(size: LARGE)
				srcSet(size: LARGE)
			}
			results
			otherProjects {
				edges {
					node {
						caseStudyTitle
						projectMiniDescription
						featuredImage {
							node {
								altText
								sourceUrl
								srcSet
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
