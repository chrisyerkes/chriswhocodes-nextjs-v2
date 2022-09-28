import { client } from '../lib/apollo';
import { gql } from '@apollo/client';

export const GET_THEME_SETTINGS = gql`
	query ThemeSettingsQuery {
		page(id: "theme-settings", idType: URI) {
			customThemeSettings {
				codepenProfile
				githubProfile
				linkedinProfile
				twitterProfile
			}
		}
	}
`;

export async function getThemeSettings() {
	const theThemeSettings = await client.query({
		query: GET_THEME_SETTINGS,
	});
	const themeSettings = theThemeSettings?.data?.page.customThemeSettings;

	return themeSettings;
}
