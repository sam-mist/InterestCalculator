import React from 'react';
import Button from '@mui/material/Button';
type Props = {
	name: string;
	properties: object;
};

const CustomButton: React.FC<Props> = ({ name, properties }) => {
	return <Button {...properties}>{name}</Button>;
};

export default CustomButton;
