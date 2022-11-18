import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
type Props = {
	name: string;
	properties: object;
};

const theme = createTheme({
	components: {
		// Name of the component ⚛️ / style sheet
		MuiButton: {
			// Name of the rule
			styleOverrides: {
				root: {
					// Some CSS
					background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
					borderRadius: 30,
					border: 0,
					color: 'white',
					height: 48,
					padding: '0 30px',
					boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
				},
			},
		},
	},
});

const CustomButton: React.FC<Props> = ({ name, properties }) => {
	return (
		<ThemeProvider theme={theme}>
			<Button {...properties}>{name}</Button>{' '}
		</ThemeProvider>
	);
};

export default CustomButton;
