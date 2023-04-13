import { gql } from "@apollo/client";

export const CREATE_USER = gql`
	mutation CreateUser($object: user_insert_input!) {
		insert_user_one(object: $object) {
			email
			id
			name
		}
	}
`;

export const CREATE_NEW_JOB_VACANCY = gql`
	mutation CreateNewJobVacancy($object: job_vacancy_insert_input!) {
		insert_job_vacancy_one(object: $object) {
			id
		}
	}
`; 


export const DELETE_JOB_BY_ID = gql`
	mutation DeleteJobById($id: uuid!) {
		delete_job_vacancy_by_pk(id: $id) {
			id
		}
	}
`;