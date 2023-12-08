// import React from 'react';
import { Box, Typography } from '@mui/material';
import './home.css';
import dynamicTitle from '../../config/dynamicTitle';

const index = () => {
	dynamicTitle('Home');
	return (
		<Box>
			<Box height="100vh" className="banner"></Box>
		</Box>
	);
};

export default index;
