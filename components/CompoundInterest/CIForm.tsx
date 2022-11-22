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
			description: "Enter a value between 0 and 10,00,00,000",
			status: 'info',
			duration: 3000,
			isClosable: true,
		});
	};

	const handlePrincipleAmountChange = (
		valueAsString: string,
		valueAsNumber: number
	) => {
		if (isNaN(valueAsNumber)) {
			setPrincipleAmount(valueAsString);
		} else if (valueAsNumber < 0 || valueAsNumber > 100000000) {
			triggerPAInvalidToast();
		} else {
			setPrincipleAmount(valueAsNumber);
		}
	};

	const [value, setValue] = React.useState('2');

	let investInputParams = useNumberInput({
		step: 1,
		isRequired: true,
		value: investYears,
		onChange(valueAsString, valueAsNumber) {
			if (isNaN(valueAsNumber)) {
				setInvestYears(valueAsString);
			} else if (valueAsNumber > 0 && valueAsNumber < 101) {
				setInvestYears(valueAsNumber);
			} else {
				triggerYearsExceedToast();
			}
		}
	});

	const investInp = investInputParams.getInputProps();
	const investInc = investInputParams.getIncrementButtonProps();
	const investDec = investInputParams.getDecrementButtonProps();

	let stayInputParams = useNumberInput({
		step: 1,
		value: stayYears,
		isRequired: true,
		onChange(valueAsString, valueAsNumber) {
			if (isNaN(valueAsNumber)) {
				setStayYears(valueAsString);
			} else if (valueAsNumber > 0 && valueAsNumber < 101) {
				setStayYears(valueAsNumber);
			} else {
				triggerYearsExceedToast();
			}
		}
	});

	const stayInp = stayInputParams.getInputProps();
	const stayInc = stayInputParams.getIncrementButtonProps();
	const stayDec = stayInputParams.getDecrementButtonProps();

	let roiInputParams = useNumberInput({
		step: 0.05,
		value: rate,
		isRequired: true,
		onChange(valueAsString, valueAsNumber) {
			if (isNaN(valueAsNumber)) {
				setRate(valueAsString);
			} else {
				let value = valueAsString.split('.');
				if (value[0].length < 6 && (!value[1] || value[1].length < 3))
					setRate(valueAsString);
			}
		}
	});

	const rateInp = roiInputParams.getInputProps();
	const rateInc = roiInputParams.getIncrementButtonProps();
	const rateDec = roiInputParams.getDecrementButtonProps();

	const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(principleAmount, investYears, stayYears, value, rate);
		let amount = 0;
		let frequency = value === '1' ? 12 : 1;
		for (let i = 1; i <= investYears * frequency; i++) {
			amount += principleAmount;
			let interest = (amount * rate) / (100*frequency);
			amount += interest;
		}
		amount *= Math.pow((1 + (rate / (100* frequency))), frequency * (stayYears - investYears))
		console.log(amount)
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
												isRequired={true}
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
										<RadioGroup value={value} onChange={(event) => { setValue(event) }}>
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
											<Button {...rateInc}>+</Button>
											<Input {...rateInp} />
											<Button {...rateDec}>-</Button>
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
