import { client } from '../lib/apollo';
import { gql } from '@apollo/client';

export const GET_SINGLE_FEATURED_WORK = gql`
	query SingleFeaturedWork {
		caseStudies(
			where: {
				taxQuery: {
					taxArray: {
						field: SLUG
						operator: IN
						taxonomy: CASESTUDYFEEDLOCATION
						terms: "featured-case-study"
					}
				}
				orderby: { field: DATE, order: DESC }
			}
			first: 1
		) {
			edges {
				node {
					caseStudyTitle
					slug
					caseStudyId
					projectMiniDescription
					uri
					featuredImage {
						node {
							altText
							srcSet
							sourceUrl
						}
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
export const GET_WORK = gql`
	query AllWorks {
		caseStudies(
			where: {
				taxQuery: {
					taxArray: {
						field: SLUG
						operator: IN
						taxonomy: CASESTUDYFEEDLOCATION
						terms: "homepage"
					}
				}
				hasPassword: false
				orderby: { field: DATE, order: DESC }
			}
			first: 10000
		) {
			edges {
				node {
					caseStudyTitle
					slug
					caseStudyId
					projectMiniDescription
					uri
					featuredImage {
						node {
							altText
							srcSet
							sourceUrl
						}
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

export const GET_FIRST_FOUR_WORKS = gql`
	query FirstFourWorksQuery {
		caseStudies(
			where: {
				taxQuery: {
					taxArray: {
						field: SLUG
						operator: IN
						taxonomy: CASESTUDYFEEDLOCATION
						terms: "homepage"
					}
				}
				hasPassword: false
				orderby: { field: DATE, order: DESC }
			}
			first: 4
		) {
			edges {
				node {
					caseStudyTitle
					slug
					caseStudyId
					projectMiniDescription
					uri
					featuredImage {
						node {
							altText
							srcSet
							sourceUrl
						}
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

export const GET_OFFSET_FOUR_WORK = gql`
	query GetOffsetFourWork {
		caseStudies(
			where: {
				taxQuery: {
					taxArray: {
						field: SLUG
						operator: IN
						taxonomy: CASESTUDYFEEDLOCATION
						terms: "homepage"
					}
				}
				hasPassword: false
				orderby: { field: DATE, order: DESC }
			}
			first: 4
		) {
			edges {
				node {
					caseStudyTitle
					slug
					caseStudyId
					projectMiniDescription
					uri
					featuredImage {
						node {
							altText
							srcSet
							sourceUrl
						}
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

export async function getSingleFeaturedWork() {
	const featworkresponse = await client.query({
		query: GET_SINGLE_FEATURED_WORK,
	});
	const singleFeatWork = featworkresponse?.data?.caseStudies?.edges;

	return singleFeatWork;
}
export async function getWorks() {
	const workresponse = await client.query({
		query: GET_WORK,
	});
	const work = workresponse?.data?.caseStudies?.edges;

	return work;
}
export async function getFirstFourWorks() {
	const firstfourworkresponse = await client.query({
		query: GET_FIRST_FOUR_WORKS,
	});
	const firstFourWorks = firstfourworkresponse?.data?.caseStudies?.edges;

	return firstFourWorks;
}
