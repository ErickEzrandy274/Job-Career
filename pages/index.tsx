import Head from "next/head";
import { Heading, Stack } from "@chakra-ui/react";

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Stack spacing={6}>
					<Heading as="h1" size="4xl" noOfLines={1}>
						(4xl) In love with React & Next
					</Heading>
					<Heading as="h2" size="3xl" noOfLines={1}>
						(3xl) In love with React & Next
					</Heading>
					<Heading as="h2" size="2xl">
						(2xl) In love with React & Next
					</Heading>
					<Heading as="h2" size="xl">
						(xl) In love with React & Next
					</Heading>
					<Heading as="h3" size="lg">
						(lg) In love with React & Next
					</Heading>
					<Heading as="h4" size="md">
						(md) In love with React & Next
					</Heading>
					<Heading as="h5" size="sm">
						(sm) In love with React & Next
					</Heading>
					<Heading as="h6" size="xs">
						(xs) In love with React & Next
					</Heading>
				</Stack>
			</main>
		</>
	);
}
