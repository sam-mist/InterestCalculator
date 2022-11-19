import {
	Card,
	CardBody,
	Text,
	Grid,
	GridItem,
	Spinner,
	CardHeader,
	Heading,
	Center,
} from '@chakra-ui/react';
import Table from 'react-bootstrap/Table';
import React from 'react';
import { Slide, Fade } from 'react-awesome-reveal';
const CIBody = () => {
	const [value, setValue] = React.useState(0);
	const handleChange = (value: number) => setValue(value);
	return (
		<Card
			bgGradient='linear-gradient(to right,#00b09b, #96c93d)'
			mt={0.5}
			borderRadius={0}>
			<Grid templateColumns='repeat(2, 1fr)' gap={4}>
				<GridItem marginLeft={10}>
					<Card>
						<CardHeader>
							<Center>
								<Slide>
									<Heading size='lg'>Example</Heading>
								</Slide>
							</Center>
						</CardHeader>
						<CardBody>
							<Fade delay={1e3} cascade damping={1e-1}>
								<Table bordered striped>
									<tbody>
										<tr>
											<th scope='row'>1</th>
											<td>Amount you want to invest</td>
											<td>₹ 1000</td>
											<td>yearly</td>
										</tr>
										<tr>
											<th scope='row'>2</th>
											<td>Number of years you want to invest</td>
											<td colSpan={2}>10</td>
										</tr>
										<tr>
											<th scope='row'>3</th>
											<td>Number of years you want to stay invested</td>
											<td colSpan={2}>10</td>
										</tr>
										<tr>
											<th scope='row'>4</th>
											<td>Annual Rate of returns</td>
											<td colSpan={2}>10</td>
										</tr>
										<tr>
											<th scope='row'>5</th>
											<td>Compound Interest</td>
											<td colSpan={2}>₹ 87,000</td>
										</tr>
									</tbody>
								</Table>
								<Center>
									<Text>
										After 10 years, your investment of ₹ 1.20 lakhs will grow to
										₹ 2.07 lakhs* @ 10% p.a.
									</Text>
								</Center>
							</Fade>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem marginRight={10}>
					<Card align='center'>
						<CardHeader>
							<Slide>
								<Heading size='lg'>Calculator</Heading>
							</Slide>
						</CardHeader>
						<CardBody>
							<Spinner
								thickness='4px'
								speed='0.95s'
								emptyColor='gray.200'
								color='blue.500'
								size='xl'
								label='Yet to come...'
							/>
						</CardBody>
					</Card>
				</GridItem>
			</Grid>
		</Card>
	);
};
export default CIBody;
