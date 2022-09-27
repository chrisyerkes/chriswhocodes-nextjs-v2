import { client } from '../lib/apollo';
import { gql } from '@apollo/client';

export const QUERY_PRIMARY_MENU = gql`
	query PrimaryMenuQuery {
		menus(where: { location: PRIMARY }) {
			edges {
				node {
					id
					name
					slug
					locations
					menuItems {
						edges {
							node {
								cssClasses
								id
								parentId
								label
								title
								target
								path
							}
						}
					}
				}
			}
		}
	}
`;

export async function getPrimaryMenu() {
	const thePrimaryMenu = await client.query({
		query: QUERY_PRIMARY_MENU,
	});
	const primaryMenu = thePrimaryMenu?.data?.menus?.edges;

	return primaryMenu;
}
