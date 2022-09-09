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

export async function getWorks() {
	const workresponse = await client.query({
		query: GET_WORK,
	});
	const work = workresponse?.data?.caseStudies?.edges;

	return work;
}
