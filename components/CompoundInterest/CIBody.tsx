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
import CIExample from './CIExample';
import CIForm from './CIForm';
const CIBody = () => {
	return (
		<Card
			bgGradient='linear-gradient(to right,#00b09b, #96c93d)'
			mt={0.5}
			borderRadius={0}>
			<Grid templateColumns='repeat(2, 1fr)' gap={4}>
				<GridItem marginLeft={10}>
					<CIExample />
				</GridItem>
				<GridItem marginRight={10}>
					<CIForm />
				</GridItem>
			</Grid>
		</Card>
	);
};
export default CIBody;
