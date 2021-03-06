// import { Button } from "@chakra-ui/button";
// import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
// import { Editable, EditableInput, EditablePreview } from "@chakra-ui/editable";
// import { Input } from "@chakra-ui/input";
// import {
// 	Box,
// 	Center,
// 	Flex,
// 	Grid,
// 	GridItem,
// 	Heading,
// 	HStack,
// } from "@chakra-ui/layout";

// const IndexPage = () => {
// 	const { toggleColorMode } = useColorMode();
// 	const formBackground = useColorModeValue("gray.100", "gray.700");
// 	return (
// 		// <Flex height="100vh" alignItems="center" justifyContent="center">
// 		// 	<Flex direction="column" background={formBackground} p={12} rounded="6">
// 		// 		<Heading mb={6}>Log in</Heading>
// 		// 		<Input
// 		// 			placeholder="akshay@kumar.com"
// 		// 			variant="filled"
// 		// 			mb={3}
// 		// 			type="email"
// 		// 		></Input>
// 		// 		<Input
// 		// 			placeholder="*************"
// 		// 			variant="filled"
// 		// 			mb={6}
// 		// 			type="password"
// 		// 		></Input>
// 		// 		<Button mb={6} colorScheme="teal">
// 		// 			{" "}
// 		// 			Log in
// 		// 		</Button>
// 		// 		<Button onClick={toggleColorMode}>Toggle color mode</Button>
// 		// 	</Flex>
// 		// </Flex>

// 		// <Center bg="tomato" h="500px" color="white">
// 		// 	This is the Center
// 		// </Center>

// 		// <HStack>
// 		// 	<Center w="40px" h="40px" bg="tomato" color="white">
// 		// 		{/* <PhoneIcon /> */}
// 		// 	</Center>
// 		// 	<Center w="40px" h="40px" bg="tomato" color="white">
// 		// 		<Box as="span" fontWeight="bold" fontSize="lg">
// 		// 			1
// 		// 		</Box>
// 		// 	</Center>
// 		// </HStack>

// 		// <Grid templateColumns="repeat(5, 1fr)" gap={6}>
// 		// 	<Box w="100%" h="10" bg="blue.500" />
// 		// 	<Box w="100%" h="10" bg="blue.500" />
// 		// 	<Box w="100%" h="10" bg="blue.500" />
// 		// 	<Box w="100%" h="10" bg="blue.500" />
// 		// 	<Box w="100%" h="10" bg="blue.500" />
// 		// </Grid>

// 		// <Grid
// 		// 	h="200px"
// 		// 	templateRows="repeat(2, 1fr)"
// 		// 	templateColumns="repeat(5, 1fr)"
// 		// 	gap={4}
// 		// >
// 		// 	<GridItem rowSpan={2} colSpan={1} bg="tomato" />
// 		// 	<GridItem colSpan={2} bg="papayawhip" />
// 		// 	<GridItem colSpan={2} bg="papayawhip" />
// 		// 	<GridItem colSpan={4} bg="tomato" />
// 		// </Grid>

// 		// Click the text to edit
// 		// <Editable defaultValue="Take some chakra">
// 		// 	<EditablePreview />
// 		// 	<EditableInput />
// 		// </Editable>
// 	);
// };

// export default IndexPage;

// import {
// 	Container,
// 	Stack,
// 	Flex,
// 	Box,
// 	Heading,
// 	Text,
// 	Button,
// 	Image,
// 	Icon,
// 	IconButton,
// 	createIcon,
// 	IconProps,
// 	useColorModeValue,
// } from "@chakra-ui/react";

// export default function IndexPage() {
// 	return (
// 		<Container maxW={"7xl"}>
// 			<Stack
// 				align={"center"}
// 				spacing={{ base: 8, md: 10 }}
// 				py={{ base: 20, md: 28 }}
// 				direction={{ base: "column", md: "row" }}
// 			>
// 				<Stack flex={1} spacing={{ base: 5, md: 10 }}>
// 					<Heading
// 						lineHeight={1.1}
// 						fontWeight={600}
// 						fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
// 					>
// 						<Text
// 							as={"span"}
// 							position={"relative"}
// 							_after={{
// 								content: "''",
// 								width: "full",
// 								height: "30%",
// 								position: "absolute",
// 								bottom: 1,
// 								left: 0,
// 								bg: "red.400",
// 								zIndex: -1,
// 							}}
// 						>
// 							Write once,
// 						</Text>
// 						<br />
// 						<Text as={"span"} color={"red.400"}>
// 							use everywhere!
// 						</Text>
// 					</Heading>
// 					<Text color={"gray.500"}>
// 						Snippy is a rich coding snippets app that lets you create your own
// 						code snippets, categorize them, and even sync them in the cloud so
// 						you can use them anywhere. All that is free!
// 					</Text>
// 					<Stack
// 						spacing={{ base: 4, sm: 6 }}
// 						direction={{ base: "column", sm: "row" }}
// 					>
// 						<Button
// 							rounded={"full"}
// 							size={"lg"}
// 							fontWeight={"normal"}
// 							px={6}
// 							colorScheme={"red"}
// 							bg={"red.400"}
// 							_hover={{ bg: "red.500" }}
// 						>
// 							Get started
// 						</Button>
// 						<Button
// 							rounded={"full"}
// 							size={"lg"}
// 							fontWeight={"normal"}
// 							px={6}
// 							leftIcon={<PlayIcon h={4} w={4} color={"gray.300"} />}
// 						>
// 							How It Works
// 						</Button>
// 					</Stack>
// 				</Stack>
// 				<Flex
// 					flex={1}
// 					justify={"center"}
// 					align={"center"}
// 					position={"relative"}
// 					w={"full"}
// 				>
// 					<Blob
// 						w={"150%"}
// 						h={"150%"}
// 						position={"absolute"}
// 						top={"-20%"}
// 						left={0}
// 						zIndex={-1}
// 						color={useColorModeValue("red.50", "red.400")}
// 					/>
// 					<Box
// 						position={"relative"}
// 						height={"300px"}
// 						rounded={"2xl"}
// 						boxShadow={"2xl"}
// 						width={"full"}
// 						overflow={"hidden"}
// 					>
// 						<IconButton
// 							aria-label={"Play Button"}
// 							variant={"ghost"}
// 							_hover={{ bg: "transparent" }}
// 							icon={<PlayIcon w={12} h={12} />}
// 							size={"lg"}
// 							color={"white"}
// 							position={"absolute"}
// 							left={"50%"}
// 							top={"50%"}
// 							transform={"translateX(-50%) translateY(-50%)"}
// 						/>
// 						<Image
// 							alt={"Hero Image"}
// 							fit={"cover"}
// 							align={"center"}
// 							w={"100%"}
// 							h={"100%"}
// 							src={
// 								"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
// 							}
// 						/>
// 					</Box>
// 				</Flex>
// 			</Stack>
// 		</Container>
// 	);
// }

// const PlayIcon = createIcon({
// 	displayName: "PlayIcon",
// 	viewBox: "0 0 58 58",
// 	d:
// 		"M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
// });

// export const Blob = (props: IconProps) => {
// 	return (
// 		<Icon
// 			width={"100%"}
// 			viewBox="0 0 578 440"
// 			fill="none"
// 			xmlns="http://www.w3.org/2000/svg"
// 			{...props}
// 		>
// 			<path
// 				fillRule="evenodd"
// 				clipRule="evenodd"
// 				d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
// 				fill="currentColor"
// 			/>
// 		</Icon>
// 	);
// };

// import {
// 	Stack,
// 	Flex,
// 	Button,
// 	Text,
// 	VStack,
// 	useBreakpointValue,
// } from "@chakra-ui/react";

// export default function IndexPage() {
// 	return (
// 		<Flex
// 			w={"full"}
// 			h={"100vh"}
// 			backgroundImage={
// 				"url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
// 			}
// 			backgroundSize={"cover"}
// 			backgroundPosition={"center center"}
// 		>
// 			<VStack
// 				w={"full"}
// 				justify={"center"}
// 				px={useBreakpointValue({ base: 4, md: 8 })}
// 				bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
// 			>
// 				<Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
// 					<Text
// 						color={"white"}
// 						fontWeight={700}
// 						lineHeight={1.2}
// 						fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
// 					>
// 						Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
// 						eiusmod tempor
// 					</Text>
// 					<Stack direction={"row"}>
// 						<Button
// 							bg={"blue.400"}
// 							rounded={"full"}
// 							color={"white"}
// 							_hover={{ bg: "blue.500" }}
// 						>
// 							Show me more
// 						</Button>
// 						<Button
// 							bg={"whiteAlpha.300"}
// 							rounded={"full"}
// 							color={"white"}
// 							_hover={{ bg: "whiteAlpha.500" }}
// 						>
// 							Show me more
// 						</Button>
// 					</Stack>
// 				</Stack>
// 			</VStack>
// 		</Flex>
// 	);
// }

import Head from "next/head";
import {
	Box,
	Heading,
	Container,
	Text,
	Button,
	Stack,
	Icon,
	useColorModeValue,
	createIcon,
} from "@chakra-ui/react";

import SimpleThreeColumns from "./_features";
import SmallWithSocial from "./_footer";
import WithSpeechBubbles from "./_testimonials";
import ThreeTierPricing from "./_pricing";
import BasicStatistics from "./_stats";
import WithAction from "./_navbar";
import JoinOurTeam from "./_join-us";
import Newsletter from "./_newsletter";

export default function IndexPage() {
	return (
		<>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<WithAction></WithAction>

			<Container maxW={"3xl"}>
				<Stack
					as={Box}
					textAlign={"center"}
					spacing={{ base: 8, md: 14 }}
					py={{ base: 20, md: 36 }}
				>
					<Heading
						fontWeight={600}
						fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
						lineHeight={"110%"}
					>
						My Name is <br />
						<Text as={"span"} color={"green.400"}>
							Akshay Kumar
						</Text>
					</Heading>
					<Text color={"gray.500"}>
						Monetize your content by charging your most loyal readers and reward
						them loyalty points. Give back to your loyal readers by granting
						them access to your pre-releases and sneak-peaks.
					</Text>
					<Stack
						direction={"column"}
						spacing={3}
						align={"center"}
						alignSelf={"center"}
						position={"relative"}
					>
						<Button
							colorScheme={"green"}
							bg={"green.400"}
							rounded={"full"}
							px={6}
							_hover={{
								bg: "green.500",
							}}
						>
							Get Started
						</Button>
						<Button variant={"link"} colorScheme={"blue"} size={"sm"}>
							Learn more
						</Button>
						<Box>
							<Icon
								as={Arrow}
								color={useColorModeValue("gray.800", "gray.300")}
								w={71}
								position={"absolute"}
								right={-71}
								top={"10px"}
							/>
							<Text
								fontSize={"lg"}
								fontFamily={"Caveat"}
								position={"absolute"}
								right={"-125px"}
								top={"-15px"}
								transform={"rotate(10deg)"}
							>
								Starting at $15/mo
							</Text>
						</Box>
					</Stack>
				</Stack>
			</Container>

			<Container maxW={"5xl"} mb={10}>
				<SimpleThreeColumns></SimpleThreeColumns>
			</Container>

			<WithSpeechBubbles></WithSpeechBubbles>

			<ThreeTierPricing></ThreeTierPricing>

			<BasicStatistics></BasicStatistics>

			<JoinOurTeam></JoinOurTeam>

			<Newsletter></Newsletter>

			<SmallWithSocial></SmallWithSocial>
		</>
	);
}

const Arrow = createIcon({
	displayName: "Arrow",
	viewBox: "0 0 72 24",
	path: (
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
			fill="currentColor"
		/>
	),
});
