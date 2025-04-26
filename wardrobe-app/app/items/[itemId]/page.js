'use client';

import ItemCard from '@/components/ItemCard';
import Navbar from '@/components/Navbar';
import React, { useState, useEffect, use } from 'react';
import SearchIcon from '@/components/icons/SearchIcon';
import AddIcon from '@/components/icons/AddIcon';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {
	CircularProgress,
	FilledInput,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getItem } from '@/utils/databaseUtils';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ColourPill from '@/components/ColourPill';
import BrandPill from '@/components/BrandPill';
import TypePill from '@/components/TypePill';
import { useRouter } from 'next/navigation';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function ItemsPage({ params }) {
	const { itemId } = use(params);
	const router = useRouter();

	const { isLoading, data: item } = useQuery({
		queryKey: ['items/' + itemId],
		queryFn: () => getItem(itemId),
	});

	if (isLoading) {
		return (
			<div className='h-full flex flex-col bg-white-pink px-10 py-6 gap-y-4'>
				<div className='h-full w-full flex items-center justify-center'>
					<CircularProgress color='inherit' />
				</div>
			</div>
		);
	}

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
				<div className='text-pink-800 cursor-default'>{item?.name}</div>
			</div>

			<div className='w-full h-full flex'>
				<img src={item?.image} className='w-[40%] h-[calc(100svh-112px)] bg-contain object-cover' />
				<div className='flex-1 px-10 flex flex-col gap-y-1'>
					<div className='flex w-full gap-x-4 mb-2'>
						<h1 className='text-4xl font-semibold text-black-brown'>{item?.name}</h1>
						<IconButton aria-label='Edit' color='blackBrown'>
							<EditIcon />
						</IconButton>
						<IconButton aria-label='Delete' color='default' sx={{ marginLeft: 'auto' }}>
							<DeleteIcon />
						</IconButton>
					</div>
					<div className='flex flex-row gap-2 flex-wrap w-full'>
						{item?.type && <TypePill type={item.type} size='medium' />}
						{item?.brand && <BrandPill brand={item.brand} size='medium' />}
						{item?.colours?.map((colour) => (
							<ColourPill key={colour} colour={colour} size='medium' />
						))}
					</div>
					<div className='py-4 flex flex-col gap-y-4'>
						<TextField disabled label='Size' id='size' value={item?.size} />
						<FormControl fullWidth>
							<InputLabel htmlFor='price'>Price</InputLabel>
							<OutlinedInput
								disabled
								id='price'
								startAdornment={<InputAdornment position='start'>$</InputAdornment>}
								label='Price'
							/>
						</FormControl>
						<TextField disabled label='Brand Colour' value={item?.brandColour} />
						<TextField disabled label='Link' value={item?.link} />
						<TextField disabled label='Code / SKU#' value={item?.code} />
						<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-au'>
							<DatePicker
								disabled
								label='Date Purchased'
								value={dayjs(item?.datePurchased, 'DD-MM-YYYY')}
								variant='filled'
								format={'DD/MM/YYYY'}
								disableFuture
							/>
						</LocalizationProvider>
						<TextField disabled multiline minRows={4} label='Notes' value={item?.notes} />
					</div>
				</div>
			</div>
		</div>
	);
}
