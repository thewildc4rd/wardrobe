import React from 'react';
import DefaultImage from './DefaultImage';
import { Button } from '@mui/material';

const UploadImageFullLength = ({ image, setImage }) => {
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
		<div className='h-full flex flex-col p-4 gap-y-4'>
			{image && <img src={image} className='h-full bg-contain object-cover rounded-md' />}
			{!image && (
				<DefaultImage type='image' height='100%' width={'100%'} style={{ borderRadius: '0px' }} />
			)}
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

export default UploadImageFullLength;
