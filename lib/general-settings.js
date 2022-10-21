import { client } from '../lib/apollo';
import { gql } from '@apollo/client';

export const GET_GENERAL_SETTINGS_DATA = gql`
	query GeneralSettingsQuery {
		generalSettings {
			title
			description
		}
	}
`;

export async function getGeneralSettingsData() {
	const theGeneralSettingsData = await client.query({
		query: GET_GENERAL_SETTINGS_DATA,
	});
	const generalSettingsData = theGeneralSettingsData?.data?.generalSettings;

	return generalSettingsData;
}
