import React from 'react';
import ColourPill from './ColourPill';
import BrandPill from './BrandPill';
import TypePill from './TypePill';
import { FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/en-au';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const ItemDisabledInputs = ({ item }) => {
	dayjs.locale('en-au');
	dayjs.extend(customParseFormat);

	return (
		<>
			<div className='flex flex-row gap-2 flex-wrap w-full'>
				{item?.type && <TypePill type={item?.type} size='medium' />}
				{item?.brand && <BrandPill brand={item?.brand} size='medium' />}
				{item?.colours?.map((colour) => (
					<ColourPill key={colour} colour={colour} size='medium' />
				))}
			</div>
			<div className='flex flex-col gap-y-4 py-4'>
				<TextField disabled label='Size' id='size' value={item?.size} />
				<FormControl fullWidth>
					<InputLabel htmlFor='price'>Price</InputLabel>
					<OutlinedInput
						disabled
						label='Price'
						value={item?.price}
						startAdornment={<InputAdornment position='start'>$</InputAdornment>}
					/>
				</FormControl>
				<TextField disabled label='Brand Colour' value={item?.brandColour} />
				<TextField disabled label='Link' value={item?.link} />
				<TextField disabled label='Code / SKU#' value={item?.code} />
				<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-au'>
					<DatePicker
						disabled
						label='Date Purchased'
						value={item?.datePurchased ? dayjs(item?.datePurchased, 'DD-MM-YYYY') : null}
						format={'DD-MM-YYYY'}
						disableFuture
					/>
					{console.log(item?.datePurchased)}
					{console.log(item?.datePurchased ? dayjs(item?.datePurchased, 'DD-MM-YYYY') : null)}
				</LocalizationProvider>
				<TextField
					disabled
					multiline
					minRows={4}
					label='Notes'
					value={item?.notes}
					variant='outlined'
				/>
			</div>
		</>
	);
};

export default ItemDisabledInputs;
