import { client } from '../lib/apollo';
import { gql } from '@apollo/client';

export const GET_FRONTPAGE_SETTINGS_DATA = gql`
	query FrontpageSettingsQuery {
		nodeByUri(uri: "/") {
			... on Page {
				seo {
					fullHead
				}
			}
		}
	}
`;

export async function getFrontpageSettingsData() {
	const theFrontpageSettingsData = await client.query({
		query: GET_FRONTPAGE_SETTINGS_DATA,
	});
	const frontpageSettingsData = theFrontpageSettingsData?.data?.nodeByUri;

	return frontpageSettingsData;
}
