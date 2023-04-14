import React from "react";
import { DetailJobPageProps } from "./interface";
import { GET_JOB_BY_ID, decode, useAuth } from "@utils";
import { useQuery } from "@apollo/client";
import { DeleteModal, DetailJobCard, PrimaryLoading } from "@elements";
import { Flex, Heading, useDisclosure } from "@chakra-ui/react";

const DetailJobPage: React.FC<DetailJobPageProps> = ({ id }) => {
	const { user } = useAuth();
	const { isOpen, onClose, onOpen } = useDisclosure();
	const { data, loading } = useQuery(GET_JOB_BY_ID, {
		variables: { id: decode(id) },
	});

	if (loading) {
		return <PrimaryLoading />;
	}

	const {
		user: { name: ownerName, id: ownerId },
		...rest
	} = data.job_vacancy_by_pk;
	const finalData = { ...rest, ownerName, ownerId };

	return (
		<Flex
			flexDirection="column"
			mx="auto"
			my={{ base: 3, md: 5 }}
			w={{ base: "full", md: "50%" }}
		>
			<Heading
				as="h2"
				textTransform="capitalize"
				textAlign="center"
				color="messenger.700"
			>
				{user?.uid === ownerId
					? "Job vacancy details that you have created"
					: "Job vacancy details"}
			</Heading>

			<DetailJobCard {...finalData} onOpen={onOpen} />

			<DeleteModal
				id={finalData.id}
				isOpen={isOpen}
				onClose={onClose}
				jobName={finalData.name}
			/>
		</Flex>
	);
};

export default DetailJobPage;
