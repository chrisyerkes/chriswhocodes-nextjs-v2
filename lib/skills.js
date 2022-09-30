import { client } from '../lib/apollo';
import { gql } from '@apollo/client';

export const GET_ALL_SKILLS = gql`
	query getFirstSkillsList {
		skillLists(where: { status: PUBLISH }, first: 1) {
			nodes {
				skillsList
				skillListId
				title
			}
		}
	}
`;

export async function getAllSkills() {
	const skillsresponse = await client.query({
		query: GET_ALL_SKILLS,
	});
	const skills = skillsresponse?.data?.skillLists?.nodes;

	return skills;
}
