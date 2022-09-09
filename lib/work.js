import { client } from '../lib/apollo';
import { gql } from '@apollo/client';

export const GET_WORK = gql`
	query AllWorks {
		caseStudies(first: 10000, where: { hasPassword: false }) {
			edges {
				node {
					caseStudyTitle
					slug
					caseStudyId
					projectMiniDescription
					finalImage {
						mediaItemUrl
					}
					modified
					caseStudyFeedLocations {
						nodes {
							slug
						}
					}
				}
			}
		}
	}
`;

export async function getWorks() {
	const workresponse = await client.query({
		query: GET_WORK,
	});
	const work = workresponse?.data?.caseStudies?.edges;

	return work;
}
