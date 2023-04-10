import { CreateJobPage } from "@modules";
import Head from "next/head";
import React from "react";

const CreateJob = () => {
	return (
		<>
			<Head>
				<title>Job Listing Vacancies | Create New Job Vacancy</title>
			</Head>

			<CreateJobPage />
		</>
	);
};

export default CreateJob;
