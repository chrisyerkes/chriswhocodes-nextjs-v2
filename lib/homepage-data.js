import { client } from '../lib/apollo';
import { gql } from '@apollo/client';

export const GET_HOMEPAGE_DATA = gql`
	query HomepageDataQuery {
		page(id: "home", idType: URI) {
			homepageSettings {
				contactTitle
				fieldGroupName
				heroCta {
					target
					title
					url
				}
				heroSubtitle
				heroTitle
				servicesTitle
				skillsTitle
				workTitle
			}
		}
	}
`;

export async function getHomepageData() {
	const theHomepageData = await client.query({
		query: GET_HOMEPAGE_DATA,
	});
	const homepageData = theHomepageData?.data?.page?.homepageSettings;

	return homepageData;
}
