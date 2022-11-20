import { Card, CardBody, Heading, CardHeader } from '@chakra-ui/react';
import { Slide, Fade } from 'react-awesome-reveal';
import CalculateIcon from '@mui/icons-material/Calculate';
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	useNumberInput,
	Button,
	Input,
	HStack,
	Grid,
	InputGroup,
	InputLeftAddon,
	Radio,
	RadioGroup,
	VStack,
} from '@chakra-ui/react';
import { Table } from '@chakra-ui/react';
import React from 'react';
import CustomButton from '../Button';
const CIForm = () => {
	let { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 0.01,
			defaultValue: 1.53,
			min: 1,
			max: 6,
			precision: 2,
		});

	const inc = getIncrementButtonProps();
	const dec = getDecrementButtonProps();
	const input = getInputProps();

	let investInputParams = useNumberInput({
		step: 1,
		defaultValue: 10,
		min: 1,
		precision: 2,
	});

	const investInp = investInputParams.getInputProps();
	const investInc = investInputParams.getIncrementButtonProps();
	const investDec = investInputParams.getDecrementButtonProps();

	let stayInputParams = useNumberInput({
		step: 1,
		defaultValue: 10,
		min: 1,
		precision: 2,
	});

	const stayInp = stayInputParams.getInputProps();
	const stayInc = stayInputParams.getIncrementButtonProps();
	const stayDec = stayInputParams.getDecrementButtonProps();

	const [value, setValue] = React.useState('2');
	return (
		<>
			<Card align='center'>
				<CardHeader>
					<Slide>
						<Heading size='lg'>Calculator</Heading>
					</Slide>
				</CardHeader>
				<CardBody>
					<FormControl>
						<VStack spacing={8}>
							<Grid templateColumns='repeat(3, 1fr)' gap={6}>
								<FormLabel>Amount you want to Invest</FormLabel>
								<InputGroup>
									<InputLeftAddon>₹</InputLeftAddon>
									<NumberInput>
										<NumberInputField />
									</NumberInput>
								</InputGroup>
								<RadioGroup defaultValue={'2'}>
									<HStack>
										<Radio value='1'>Monthly</Radio>
										<Radio value='2'>Yearly</Radio>
									</HStack>
								</RadioGroup>
							</Grid>
							<Grid templateColumns='repeat(3, 1fr)' gap={6}>
								<FormLabel>Number of years you want to invest for</FormLabel>
								<HStack maxW='320px'>
									<Button {...investInc}>+</Button>
									<Input {...investInp} />
									<Button {...investDec}>-</Button>
								</HStack>
							</Grid>
							<Grid templateColumns='repeat(3, 1fr)' gap={6}>
								<FormLabel>
									Number of years you want to stay invested for
								</FormLabel>
								<HStack maxW='320px'>
									<Button {...stayInc}>+</Button>
									<Input {...stayInp} />
									<Button {...stayDec}>-</Button>
								</HStack>
							</Grid>
							<Grid templateColumns='repeat(3, 1fr)' gap={6}>
								<FormLabel>Annual Rate of Interest</FormLabel>
								<HStack maxW='320px'>
									<Button {...inc}>+</Button>
									<Input {...input} />
									<Button {...dec}>-</Button>
								</HStack>
							</Grid>
							<CustomButton
								name='Calculate'
								properties={{
									variant: 'contained',
									endIcon: <CalculateIcon />,
									type: 'submit',
								}}
							/>
						</VStack>
					</FormControl>
				</CardBody>
			</Card>
		</>
	);
};
export default CIForm;
