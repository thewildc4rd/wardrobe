'use client';

import {
	FilledInput,
	FormControl,
	InputAdornment,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material';
import React, { useState } from 'react';

const NewItemPage = (props) => {
	const [itemName, setItemName] = useState('');
	const [type, setType] = useState('');
	const [brand, setBrand] = useState('');
	const [price, setPrice] = useState('');

	return (
		<div className='h-full flex flex-col bg-white-pink px-10 py-6 gap-y-4 items-center'>
			<h1 className='text-4xl text-black-brown font-bold'>New Item</h1>
			<FormControl className='flex flex-col gap-4 w-96'>
				<TextField
					required
					label='Item Name'
					id='itemName'
					variant='filled'
					value={itemName}
					onChange={(e) => {
						setItemName(e.target.value);
						setErrMsg('');
					}}
				/>
				<FormControl variant='filled' fullWidth required>
					<InputLabel id='type-label'>Type</InputLabel>
					<Select
						labelId='type-label'
						id='type'
						value={type}
						label='Type'
						onChange={(event) => {
							setType(event.target.value);
						}}
					>
						<MenuItem value={'top'}>Top</MenuItem>
						<MenuItem value={'skirt'}>Skirt</MenuItem>
						<MenuItem value={'pants'}>Pants</MenuItem>
						<MenuItem value={'jacket'}>Jacket</MenuItem>
						<MenuItem value={'dress'}>Dress</MenuItem>
						<MenuItem value={'belt'}>Belt</MenuItem>
						<MenuItem value={'shirt'}>Shirt</MenuItem>
						<MenuItem value={'cardigan'}>Cardigan</MenuItem>
					</Select>
				</FormControl>
				<TextField
					required
					label='Brand'
					id='brand'
					variant='filled'
					value={brand}
					onChange={(e) => {
						setBrand(e.target.value);
						setErrMsg('');
					}}
				/>
				<FormControl fullWidth variant='filled'>
					<InputLabel htmlFor='price'>Price</InputLabel>
					<FilledInput
						id='price'
						startAdornment={<InputAdornment position='start'>$</InputAdornment>}
					/>
				</FormControl>
			</FormControl>
		</div>
	);
};

export default NewItemPage;
