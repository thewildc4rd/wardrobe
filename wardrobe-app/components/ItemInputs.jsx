import {
	Button,
	FilledInput,
	FormControl,
	InputAdornment,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { colours as colourDict } from '@/utils/colourUtils';
import CrossIcon from '@/components/icons/CrossIcon';
import dayjs from 'dayjs';
import 'dayjs/locale/en-au';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const ItemInputs = ({ itemData, setItemData, setErrMsg }) => {
	dayjs.locale('en-au');
	dayjs.extend(customParseFormat);

	const [currentColour, setCurrentColour] = useState('');

	const addColour = () => {
		let colour = currentColour.charAt(0).toUpperCase() + currentColour.slice(1);
		if (!itemData?.colours?.includes(colour)) {
			setItemData({ ...itemData, colours: [...itemData?.colours, colour] });
			setCurrentColour('');
		}
	};

	return (
		<div className='flex flex-col gap-y-4 py-4'>
			<TextField
				required
				label='Name'
				id='name'
				value={itemData?.name || ''}
				onChange={(e) => {
					setItemData({ ...itemData, name: e.target.value });
					setErrMsg('');
				}}
			/>
			<FormControl fullWidth required>
				<InputLabel id='type-label'>Type</InputLabel>
				<Select
					labelId='type-label'
					id='type'
					value={itemData?.type || ''}
					label='Type'
					onChange={(event) => {
						setItemData({ ...itemData, type: event.target.value });
						setErrMsg('');
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
				value={itemData?.brand || ''}
				onChange={(e) => {
					setItemData({ ...itemData, brand: e.target.value });
					setErrMsg('');
				}}
			/>
			<TextField
				label='Size'
				id='size'
				value={itemData?.size || ''}
				onChange={(e) => {
					setItemData({ ...itemData, size: e.target.value });
					setErrMsg('');
				}}
			/>
			<FormControl fullWidth>
				<InputLabel htmlFor='price'>Price</InputLabel>
				<OutlinedInput
					label='Price'
					value={itemData?.price || ''}
					onChange={(e) => {
						setItemData({ ...itemData, price: e.target.value });
						setErrMsg('');
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
						{itemData?.colours?.map((colour, idx) => {
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
												colours: itemData?.colours?.filter((x, i) => i !== idx),
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
				value={itemData?.brandColour || ''}
				onChange={(e) => {
					setItemData({ ...itemData, brandColour: e.target.value });
					setErrMsg('');
				}}
			/>
			<TextField
				label='Link'
				id='link'
				value={itemData?.link || ''}
				onChange={(e) => {
					setItemData({ ...itemData, link: e.target.value });
					setErrMsg('');
				}}
			/>
			<TextField
				label='Code / SKU#'
				id='code'
				value={itemData?.code || ''}
				onChange={(e) => {
					setItemData({ ...itemData, code: e.target.value });
					setErrMsg('');
				}}
			/>
			<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-au'>
				<DatePicker
					label='Date Purchased'
					value={itemData?.datePurchased ? dayjs(itemData?.datePurchased, 'DD-MM-YYYY') : null}
					onChange={(value) => setItemData({ ...itemData, datePurchased: value })}
					format={'DD-MM-YYYY'}
					disableFuture
				/>
			</LocalizationProvider>
			<TextField
				multiline
				minRows={4}
				label='Notes'
				value={itemData?.notes}
				onChange={(e) => {
					setItemData({ ...itemData, notes: e.target.value });
					setErrMsg('');
				}}
			/>
		</div>
	);
};

export default ItemInputs;
