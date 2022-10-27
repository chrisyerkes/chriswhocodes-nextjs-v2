import { client } from '../lib/apollo';
import { gql } from '@apollo/client';

export const GET_PAGE = gql`
	query GetPageByURI($id: ID!) {
		page(id: $id, idType: URI) {
			title
			content
			date
			seo {
				fullHead
			}
		}
	}
`;

export async function getSinglePage(params) {
	//  the params argument for this function corresponds to the dynamic URL segments
	//  we included in our page-based route. So, in this case, the `params` object will have
	//  a property named `uri` that contains that route segment when a user hits the page
	const response = await client.query({
		query: GET_PAGE,
		variables: {
			id: params.uri,
		},
	});
	// const response = await getPostByUri(params.uri)
	const page = response?.data?.page;
	
	return page;
}