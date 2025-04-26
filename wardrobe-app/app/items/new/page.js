'use client';

import {
	Button,
	FilledInput,
	FormControl,
	InputAdornment,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { colours as colourDict } from '@/utils/colourUtils';
import CrossIcon from '@/components/icons/CrossIcon';
import UploadImage from '@/components/UploadImage';
import { useAuth } from '@/authentication/AuthContext';
import { addItem } from '@/utils/databaseUtils';
import { useRouter } from 'next/navigation';

const NewItemPage = (props) => {
	const [image, setImage] = useState('');
	const [name, setName] = useState('');
	const [type, setType] = useState('');
	const [brand, setBrand] = useState('');
	const [size, setSize] = useState('');
	const [price, setPrice] = useState('');
	const [brandColour, setBrandColour] = useState('');
	const [colours, setColours] = useState([]);
	const [currentColour, setCurrentColour] = useState('');
	const [link, setLink] = useState('');
	const [code, setCode] = useState('');
	const [datePurchased, setDatePurchased] = useState(null);
	const [errMsg, setErrMsg] = useState('');
	const { currentUser } = useAuth();
	const router = useRouter();

	const onSubmit = () => {
		let data = {
			image,
			name,
			type,
			brand,
			price,
			size,
			colours,
			brandColour,
			link,
			code,
			datePurchased: datePurchased.format('DD-MM-YYYY'),
			ownerId: currentUser.uid,
		};
		addItem(data).then(() => {
			router.push('/items');
		});
	};

	const addColour = () => {
		let colour = currentColour.charAt(0).toUpperCase() + currentColour.slice(1);
		if (!colours.includes(colour)) {
			setColours([...colours, colour]);
			setCurrentColour('');
		}
	};

	return (
		<div className='h-full flex flex-col bg-white-pink px-10 py-6 gap-y-4 items-center pt-15'>
			<h1 className='text-4xl text-black-brown font-bold mb-5'>New Item</h1>
			<div className='flex flex-col gap-4 w-96 mb-10'>
				<UploadImage image={image} setImage={setImage} />
				<TextField
					required
					label='Name'
					id='name'
					variant='filled'
					value={name}
					onChange={(e) => {
						setName(e.target.value);
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
						<MenuItem value={'Top'}>Top</MenuItem>
						<MenuItem value={'Skirt'}>Skirt</MenuItem>
						<MenuItem value={'Pants'}>Pants</MenuItem>
						<MenuItem value={'Jacket'}>Jacket</MenuItem>
						<MenuItem value={'Dress'}>Dress</MenuItem>
						<MenuItem value={'Belt'}>Belt</MenuItem>
						<MenuItem value={'Shirt'}>Shirt</MenuItem>
						<MenuItem value={'Cardigan'}>Cardigan</MenuItem>
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
				<TextField
					label='Size'
					id='size'
					variant='filled'
					value={size}
					onChange={(e) => {
						setSize(e.target.value);
						setErrMsg('');
					}}
				/>
				<FormControl fullWidth variant='filled'>
					<InputLabel htmlFor='price'>Price</InputLabel>
					<FilledInput
						id='price'
						onChange={(e) => {
							setPrice(e.target.value);
						}}
						startAdornment={<InputAdornment position='start'>$</InputAdornment>}
					/>
				</FormControl>
				<div className='flex flex-col gap-y-2'>
					<div className='flex gap-x-2'>
						<FormControl fullWidth variant='filled'>
							<TextField
								label='Colours'
								id='colours'
								variant='filled'
								value={currentColour}
								onChange={(e) => {
									setCurrentColour(e.target.value);
									setErrMsg('');
								}}
								onKeyDown={(e) => {
									if (e.key === 'Enter') {
										addColour();
									}
								}}
							/>
						</FormControl>
						<Button
							variant='contained'
							onClick={() => {
								addColour();
							}}
						>
							Add
						</Button>
					</div>
					{colours.length !== 0 && (
						<div className='flex gap-2 mb-2 flex-wrap'>
							{colours.map((colour, idx) => {
								let bg = colourDict[colour]?.bg ?? 'bg-brown-darkest/15';
								let text = colourDict[colour]?.text;
								let hover = colourDict[colour]?.hover ?? 'hover:bg-brown-darkest/5';
								let border = 'border-2 border-brown-darkest';

								return (
									<div
										key={(colour, idx)}
										className={`${border} ${bg} ${text} ${hover} cursor-default flex items-center pl-4 pr-3 py-[1px] rounded-full text-sm transition-all gap-x-1`}
									>
										{colour}
										<CrossIcon
											className={'cursor-pointer'}
											colour={
												text === 'text-black' || colourDict[colour] === undefined
													? '#0F0F0F'
													: '#FFFFFF'
											}
											onClick={() => {
												setColours(colours.filter((x, i) => i !== idx));
											}}
										/>
									</div>
								);
							})}
						</div>
					)}
				</div>
				<TextField
					required
					label='Brand Colour'
					id='brandColour'
					variant='filled'
					value={brandColour}
					onChange={(e) => {
						setBrandColour(e.target.value);
						setErrMsg('');
					}}
				/>
				<TextField
					label='Link'
					id='link'
					variant='filled'
					value={link}
					onChange={(e) => {
						setLink(e.target.value);
						setErrMsg('');
					}}
				/>
				<TextField
					label='Code / SKU#'
					id='code'
					variant='filled'
					value={code}
					onChange={(e) => {
						setCode(e.target.value);
						setErrMsg('');
					}}
				/>
				<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-au'>
					<DatePicker
						label='Date Purchased'
						value={datePurchased}
						onChange={(newValue) => setDatePurchased(newValue)}
						variant='filled'
						format={'DD/MM/YYYY'}
						disableFuture
					/>
				</LocalizationProvider>
				<Button variant='contained' onClick={onSubmit}>
					Create
				</Button>
			</div>
		</div>
	);
};

export default NewItemPage;
