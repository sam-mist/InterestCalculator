import React from 'react';
import {
	CardFooter,
	Card,
	Box,
	Heading,
	Stack,
	Text,
	CardHeader,
	CardBody,
	StackDivider,
} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import { Fade, Slide } from 'react-awesome-reveal';

const CIHeader = () => {
	return (
		<>
			<Card variant='elevated' align='center'>
				<CardHeader>
					<Heading>
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString('Compound Interest')
									.pauseFor(3500)
									.deleteAll()
									.typeString('Interesse Composto')
									.pauseFor(2500)
									.deleteAll()
									.typeString('चक्रवृद्धि ब्याज')
									.pauseFor(2500)
									.deleteAll()
									.typeString('చక్రవడ్డీ')
									.pauseFor(2500)
									.start();
							}}
							options={{
								autoStart: true,
								loop: true,
							}}
						/>
					</Heading>
				</CardHeader>
				<CardBody>
					<Stack divider={<StackDivider />} spacing={4}>
						<Box>
							<Slide>
								<Heading size='md' textTransform='uppercase'>
									Definition
								</Heading>
							</Slide>
							<Fade delay={1e3} cascade damping={1e-1}>
								<Text pt='2' fontSize='md'>
									Compound interest is the interest on savings calculated on
									both the initial principal and the accumulated interest from
									previous periods.
								</Text>
							</Fade>
						</Box>
						<Box>
							<Slide>
								<Heading size='md' textTransform='uppercase'>
									History
								</Heading>
							</Slide>
							<Fade delay={1e3} cascade damping={1e-1}>
								<Text pt='2' fontSize='md'>
									Interest on interest, or the power of compound interest, is
									believed to have originated in 17th-century Italy. It will
									make a sum grow faster than simple interest, which is
									calculated only on the principal amount.
								</Text>
							</Fade>
						</Box>
					</Stack>
				</CardBody>
			</Card>
		</>
	);
};
export default CIHeader;
