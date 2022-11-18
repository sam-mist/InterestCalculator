import React from 'react';
import CustomButton from '../components/Button';
import CalculateIcon from '@mui/icons-material/Calculate';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
const CIForm = () => {
	return (
		<Form className='form'>
			<Row className='mb-3'>
				<h1>Compound Interest Calculator</h1>
			</Row>
			<Row className='mb-3'>
				<Form.Group as={Col} controlId='formGridAmount'>
					<InputLabel htmlFor='standard-adornment-amount'>
						Amount you want to Invest
					</InputLabel>
					<Row>
						<Form.Group as={Col} controlId='label'>
							<Input
								id='principle_amount'
								startAdornment={
									<InputAdornment position='start'>$</InputAdornment>
								}
							/>
						</Form.Group>
						<Form.Group as={Col} controlId='formGridPassword'>
							<RadioGroup
								row
								name='row-radio-buttons-group'
								defaultValue='yearly' id='frequency'>
								<FormControlLabel
									value='monthly'
									control={<Radio />}
									label='Monthly'
								/>
								<FormControlLabel
									value='yearly'
									control={<Radio />}
									label='Yearly'
								/>
							</RadioGroup>
						</Form.Group>
					</Row>
				</Form.Group>
			</Row>

			<Form.Group className='mb-3' controlId='formGridAddress1'>
				<InputLabel htmlFor='standard-adornment-amount'>
					Number of years you want to Invest
				</InputLabel>
				<Input
					id='no_of_yrs_invest'
					type='number'
					inputProps={{ min: 1, max: 100 }}
					defaultValue={1}
					startAdornment={<InputAdornment position='start'>yrs</InputAdornment>}
				/>
			</Form.Group>

			<Form.Group className='mb-3' controlId='formGridAddress1'>
				<InputLabel htmlFor='standard-adornment-amount'>
					Number of years you want to stay Invested for
				</InputLabel>
				<Input
					id='no_of_yrs_stay'
					type='number'
					inputProps={{ min: 1, max: 100 }}
					defaultValue={1}
					startAdornment={<InputAdornment position='start'>yrs</InputAdornment>}
				/>
			</Form.Group>

			<Form.Group className='mb-3' controlId='formGridAddress1'>
				<InputLabel htmlFor='standard-adornment-amount'>
					Annual Rate of Interest
				</InputLabel>
				<Input
					id='rate'
					type='number'
					inputProps={{ step: 0.1, maxLength: 7, min: 0 }}
					required={true}
					defaultValue={5.0}
					startAdornment={<InputAdornment position='start'>%</InputAdornment>}
				/>
			</Form.Group>

			<CustomButton
				name='Calculate'
				properties={{
					variant: 'contained',
					endIcon: <CalculateIcon></CalculateIcon>,
				}}
			/>
		</Form>
	);
};
export default CIForm;
