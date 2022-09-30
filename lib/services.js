import { client } from '../lib/apollo';
import { gql } from '@apollo/client';

export const GET_ALL_SERVICES = gql`
	query getAllServices {
		services(
			where: { orderby: { field: DATE, order: ASC }, status: PUBLISH }
		) {
			nodes {
				serviceId
				serviceTitle
				serviceIcon
				serviceDescription
			}
		}
	}
`;

export async function getAllServices() {
	const servicesresponse = await client.query({
		query: GET_ALL_SERVICES,
	});
	const services = servicesresponse?.data?.services?.nodes;

	return services;
}
