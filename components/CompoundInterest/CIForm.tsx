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
	useToast,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInputStepper,
} from '@chakra-ui/react';
import React from 'react';
import CustomButton from '../Button';
import { useState } from 'react';
import { duration } from '@mui/material';
const CIForm = () => {
	const [investYears, setInvestYears] = useState(10);
	const [stayYears, setStayYears] = useState(10);
	const [principleAmount, setPrincipleAmount] = useState(0);
	const [rate, setRate] = useState(1.54);
	const toast = useToast();
	let { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 0.01,
			value: rate,
			min: 1,
			max: 6,
			precision: 2,
			onChange(valueAsString, valueAsNumber) {
				setRate(valueAsNumber);
			},
		});

	const triggerYearsExceedToast = () => {
		toast({
			title: 'Info',
			description: 'The year must be between 1 and 100',
			status: 'info',
			duration: 3000,
			isClosable: true,
		});
	};
	const triggerPAInvalidToast = () => {
		toast({
			title: 'Info',
			description: "Principal Amount can't be less than zero",
			status: 'info',
			duration: 3000,
			isClosable: true,
		});
	};
	const inc = getIncrementButtonProps();
	const dec = getDecrementButtonProps();
	const input = getInputProps();
	let investInputParams = useNumberInput({
		step: 1,
		value: investYears,
		min: 1,
		max: 100,
		onChange(valueAsString, valueAsNumber) {
			console.log(valueAsNumber);
			if (!isNaN(valueAsNumber)) {
				if (valueAsString.length > 3) {
					triggerYearsExceedToast();
					setInvestYears(+valueAsString.substring(0, 3));
				} else if (valueAsNumber > 100) {
					triggerYearsExceedToast();
					setInvestYears(+valueAsString.substring(0, 2));
				} else {
					setInvestYears(valueAsNumber);
				}
			}
		},
	});

	const investInp = investInputParams.getInputProps();
	const investInc = investInputParams.getIncrementButtonProps();
	const investDec = investInputParams.getDecrementButtonProps();

	let stayInputParams = useNumberInput({
		step: 1,
		value: stayYears,
		min: 1,
		max: 100,
		onChange(valueAsString, valueAsNumber) {
			if (!isNaN(valueAsNumber)) {
				if (valueAsString.length > 3) {
					triggerYearsExceedToast();
					setStayYears(+valueAsString.substring(0, 3));
				} else if (valueAsNumber > 100) {
					triggerYearsExceedToast();
					setStayYears(+valueAsString.substring(0, 2));
				} else {
					setStayYears(valueAsNumber);
				}
			}
		},
	});

	const handlePrincipleAmountChange = (
		valueAsString: string,
		valueAsNumber: number
	) => {
		if (!isNaN(valueAsNumber)) {
			if (valueAsNumber < 0) {
				triggerPAInvalidToast();
				setPrincipleAmount(0);
			} else {
				setPrincipleAmount(valueAsNumber);
			}
		}
	};

	const stayInp = stayInputParams.getInputProps();
	const stayInc = stayInputParams.getIncrementButtonProps();
	const stayDec = stayInputParams.getDecrementButtonProps();

	const [value, setValue] = React.useState('2');
	const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(principleAmount, investYears, stayYears, value, rate);
	};
	return (
		<>
			<Card align='center'>
				<CardHeader>
					<Slide>
						<Heading size='lg'>Calculator</Heading>
					</Slide>
				</CardHeader>
				<CardBody>
					<form onSubmit={handleOnSubmit}>
						<FormControl>
							<VStack spacing={8}>
								<Grid templateColumns='repeat(3, 1fr)' gap={6}>
									<Slide>
										<FormLabel>Amount you want to Invest</FormLabel>
									</Slide>
									<Fade delay={1e3} cascade damping={1e-1}>
										<InputGroup>
											<InputLeftAddon>₹</InputLeftAddon>
											<NumberInput
												allowMouseWheel
												onChange={handlePrincipleAmountChange}
												value={principleAmount}>
												<NumberInputField />
												<NumberInputStepper>
													<NumberIncrementStepper />
													<NumberDecrementStepper />
												</NumberInputStepper>
											</NumberInput>
										</InputGroup>
									</Fade>
									<Fade delay={1e3} cascade damping={1e-1}>
										<RadioGroup value={value} onChange={setValue}>
											<HStack>
												<Radio value='1'>Monthly</Radio>
												<Radio value='2'>Yearly</Radio>
											</HStack>
										</RadioGroup>
									</Fade>
								</Grid>
								<Grid templateColumns='repeat(3, 1fr)' gap={6}>
									<Slide>
										<FormLabel>
											Number of years you want to invest for
										</FormLabel>
									</Slide>
									<Fade delay={1e3} cascade damping={1e-1}>
										<HStack maxW='320px'>
											<Button {...investInc}>+</Button>
											<Input {...investInp} />
											<Button {...investDec}>-</Button>
										</HStack>
									</Fade>
								</Grid>
								<Grid templateColumns='repeat(3, 1fr)' gap={6}>
									<Slide>
										<FormLabel>
											Number of years you want to stay invested for
										</FormLabel>
									</Slide>
									<Fade delay={1e3} cascade damping={1e-1}>
										<HStack maxW='320px'>
											<Button {...stayInc}>+</Button>
											<Input {...stayInp} />
											<Button {...stayDec}>-</Button>
										</HStack>
									</Fade>
								</Grid>
								<Grid templateColumns='repeat(3, 1fr)' gap={6}>
									<Slide>
										<FormLabel>Annual Rate of Interest</FormLabel>
									</Slide>
									<Fade delay={1e3} cascade damping={1e-1}>
										<HStack maxW='320px'>
											<Button {...inc}>+</Button>
											<Input {...input} />
											<Button {...dec}>-</Button>
										</HStack>
									</Fade>
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
					</form>
				</CardBody>
			</Card>
		</>
	);
};
export default CIForm;
