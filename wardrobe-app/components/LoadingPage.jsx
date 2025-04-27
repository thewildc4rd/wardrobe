import { CircularProgress } from '@mui/material';
import React from 'react';

const LoadingPage = (props) => {
	return (
		<div className='h-full flex flex-col bg-white-pink px-10 py-6 gap-y-4'>
			<div className='h-full w-full flex items-center justify-center'>
				<CircularProgress color='inherit' />
			</div>
		</div>
	);
};

export default LoadingPage;
