'use client';

import React, { use, useEffect, useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {
	Button,
	CircularProgress,
	FilledInput,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	TextField,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getItem } from '@/utils/databaseUtils';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import ColourPill from '@/components/ColourPill';
import BrandPill from '@/components/BrandPill';
import TypePill from '@/components/TypePill';
import { useRouter } from 'next/navigation';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import DefaultImage from '@/components/DefaultImage';
import { useAuth } from '@/authentication/AuthContext';
import { colours as colourDict } from '@/utils/colourUtils';
import CrossIcon from '@/components/icons/CrossIcon';
import UploadImage from '@/components/UploadImage';

export default function ItemsPage({ params }) {
	// const [image, setImage] = useState('');
	// const [name, setName] = useState('');
	// const [type, setType] = useState('');
	// const [brand, setBrand] = useState('');
	// const [size, setSize] = useState('');
	// const [price, setPrice] = useState('');
	// const [brandColour, setBrandColour] = useState('');
	// const [colours, setColours] = useState([]);
	const [currentColour, setCurrentColour] = useState('');
	// const [link, setLink] = React.useState('');
	// const [code, setCode] = React.useState('');
	// const [datePurchased, setDatePurchased] = React.useState(null);
	const [itemData, setItemData] = React.useState({});
	const [errMsg, setErrMsg] = React.useState('');
	const { currentUser } = useAuth();
	const { itemId } = use(params);
	const router = useRouter();

	const { isLoading, data: item } = useQuery({
		queryKey: ['items/' + itemId],
		queryFn: () => getItem(itemId),
	});

	useEffect(() => {
		setItemData(item);
		// setImage(item?.image);
		// setName(item?.name);
		// setType(item?.type);
		// setBrand(item?.brand);
		// setSize(item?.size);
		// setPrice(item?.price);
		// setBrandColour(item?.brandColour);
		// // setColours(item?.colours);
		// setLink(item?.link);
		// setCode(item?.code);
		// setDatePurchased(item?.datePurchased);
	}, [item]);

	if (isLoading) {
		return (
			<div className='h-full flex flex-col bg-white-pink px-10 py-6 gap-y-4'>
				<div className='h-full w-full flex items-center justify-center'>
					<CircularProgress color='inherit' />
				</div>
			</div>
		);
	}

	const onSubmit = () => {
		// let data = {
		// 	image,
		// 	name,
		// 	type,
		// 	brand,
		// 	price,
		// 	size,
		// 	colours,
		// 	brandColour,
		// 	link,
		// 	code,
		// 	datePurchased: datePurchased.format('DD-MM-YYYY'),
		// 	ownerId: currentUser.uid,
		// };
		// addItem(data).then(() => {
		// 	router.push('/items');
		// });
	};

	const addColour = () => {
		let colour = currentColour.charAt(0).toUpperCase() + currentColour.slice(1);
		if (!itemData?.colours.includes(colour)) {
			setItemData({ ...itemData, colours: [...itemData?.colours, colour] });
			setCurrentColour('');
		}
	};

	return (
		<div className='h-full flex flex-col bg-white-pink'>
			<div className='flex px-10 py-2 gap-x-1 font-medium'>
				<div
					className='hover:underline cursor-pointer'
					onClick={() => {
						router.push('/items');
					}}
				>
					Items
				</div>
				<NavigateNextIcon />
				<div
					className='hover:underline cursor-pointer'
					onClick={() => {
						router.push('/items/' + itemId);
					}}
				>
					{itemData?.name}
				</div>
				<NavigateNextIcon />
				<div className='text-pink-800 cursor-default'>Edit</div>
			</div>

			<div className='w-full h-full flex'>
				{itemData?.image && (
					<img
						src={itemData?.image}
						className='w-[40%] h-[calc(100svh-112px)] bg-contain object-cover'
					/>
				)}
				{!itemData?.image && (
					<DefaultImage
						type='image'
						height='calc(100svh-112px)'
						width={'40%'}
						style={{ borderRadius: '0px' }}
					/>
				)}
				<div className='flex-1 px-10 flex flex-col gap-y-1 mb-10'>
					<div className='flex w-full gap-x-4 mb-2'>
						<h1 className='text-4xl font-semibold text-black-brown'>{itemData?.name}</h1>
						<IconButton
							aria-label='Save'
							color='blackBrown'
							onClick={() => {
								router.push('/items/' + itemId);
							}}
						>
							<SaveIcon />
						</IconButton>
						<IconButton aria-label='Delete' color='default' sx={{ marginLeft: 'auto' }}>
							<DeleteIcon />
						</IconButton>
					</div>
					<div className='flex flex-col gap-4 mt-2'>
						<TextField
							required
							label='Name'
							id='name'
							variant='filled'
							value={itemData?.name || ''}
							onChange={(e) => {
								setItemData({ ...itemData, name: e.target.value });
								setErrMsg('');
							}}
						/>
						<FormControl variant='filled' fullWidth required>
							<InputLabel id='type-label'>Type</InputLabel>
							<Select
								labelId='type-label'
								id='type'
								value={itemData?.type || ''}
								label='Type'
								onChange={(event) => {
									setType({ ...itemData, type: event.target.value });
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
							value={itemData?.brand || ''}
							onChange={(e) => {
								setBrand({ ...itemData, brand: e.target.value });
								setErrMsg('');
							}}
						/>
						<TextField
							label='Size'
							id='size'
							variant='filled'
							value={itemData?.size || ''}
							onChange={(e) => {
								setSize({ ...itemData, size: e.target.value });
								setErrMsg('');
							}}
						/>
						<FormControl fullWidth variant='filled'>
							<InputLabel htmlFor='price'>Price</InputLabel>
							<FilledInput
								id='price'
								value={itemData?.price || ''}
								onChange={(e) => {
									setPrice({ ...itemData, price: e.target.value });
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
							{itemData?.colours?.length !== 0 && (
								<div className='flex gap-2 mb-2 flex-wrap'>
									{itemData?.colours.map((colour, idx) => {
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
														setItemData({
															...itemData,
															colours: itemData?.colours.filter((x, i) => i !== idx),
														});
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
							value={itemData?.brandColour || ''}
							onChange={(e) => {
								setItemData({ ...itemData, brandColour: e.target.value });
								setErrMsg('');
							}}
						/>
						<TextField
							label='Link'
							id='link'
							variant='filled'
							value={itemData?.link || ''}
							onChange={(e) => {
								setItemData({ ...itemData, link: e.target.value });
								setErrMsg('');
							}}
						/>
						<TextField
							label='Code / SKU#'
							id='code'
							variant='filled'
							value={itemData?.code || ''}
							onChange={(e) => {
								setItemData({ ...itemData, code: e.target.value });
								setErrMsg('');
							}}
						/>
						<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-au'>
							<DatePicker
								label='Date Purchased'
								value={dayjs(itemData?.datePurchased, 'DD-MM-YYYY') || ''}
								onChange={(newValue) => setItemData({ ...itemData, datePurchased: newValue })}
								variant='filled'
								format={'DD/MM/YYYY'}
								disableFuture
							/>
						</LocalizationProvider>
					</div>
				</div>
			</div>
		</div>
	);
}
