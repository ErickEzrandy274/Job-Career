import { gql } from "@apollo/client";

export const GET_USER_BY_ID = gql`
	query GetUserById($id: String!) {
		user_by_pk(id: $id) {
			id
		}
	}
`;

export const GET_JOB_BY_ID = gql`
	query GetJobById($id: uuid!) {
		job_vacancy_by_pk(id: $id) {
			applicants
			company_name
			created_at
			description
			salary
			name
			location
			id
			working_type
			user {
				id
				name
			}
		}
	}
`;