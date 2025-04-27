import { Box, Button, Fab, Grid } from '@mui/material';
import React from 'react';
import DefaultImage from './DefaultImage';

const UploadImage = ({ image, setImage, style }) => {
	const handleUploadImage = (e) => {
		// get the file uploaded
		const file = e.target.files[0];
		if (!file) {
			return;
		}
		const reader = new FileReader();
		reader.readAsDataURL(file);

		// when the image loads, set the image to it
		reader.onloadend = function (e) {
			setImage(reader.result);
		};
	};

	return (
		<div className='flex flex-col items-center gap-y-2 mb-5'>
			{image && (
				<div className='bg-brown-lightest w-full flex justify-center rounded-lg'>
					<img src={image} className='max-h-[250px] bg-contain object-fit  justify-center' />
				</div>
			)}
			{!image && <DefaultImage type='image' height='250px' width={'100%'} />}
			<div className='w-full flex justify-center gap-x-2'>
				{image && (
					<Button
						variant='contained'
						component='label'
						onClick={() => {
							setImage('');
						}}
						color='info'
					>
						Reset
					</Button>
				)}
				<Button
					variant='contained'
					component='label'
					onChange={handleUploadImage}
					color='primary'
					className='flex-1'
				>
					Upload Image
					<input type='file' accept='.jpg, .jpeg, .png' hidden />
				</Button>
			</div>
		</div>
	);
};

export default UploadImage;
