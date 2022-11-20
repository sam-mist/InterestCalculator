import {
	Card,
	CardBody,
	Heading,
	Center,
	CardHeader,
	Text,
} from '@chakra-ui/react';
import { Slide, Fade } from 'react-awesome-reveal';
import { Table } from 'react-bootstrap';
const CIExample = () => {
	return (
		<>
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
								After 10 years, your investment of ₹ 1.20 lakhs will grow to ₹
								2.07 lakhs* @ 10% p.a.
							</Text>
						</Center>
					</Fade>
				</CardBody>
			</Card>
		</>
	);
};

export default CIExample;
