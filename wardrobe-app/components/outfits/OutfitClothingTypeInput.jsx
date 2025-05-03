import React, { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OutfitItemCard from './OutfitItemCard';
import { CircularProgress } from '@mui/material';

const OutfitClothingTypeInput = ({ isLoading, items, type }) => {
	const [searchString, setSearchString] = useState('');
	const [expanded, setExpanded] = useState(false);

	return (
		<div>
			<div className='text-lg font-medium'>{type}</div>
			<div className='flex'>
				<input
					className='text-sm w-full bg-white px-4 py-2 rounded-tl-sm'
					type='text'
					placeholder={`Search to add one of your ${type.toLowerCase()}s...`}
					title='Search'
					value={searchString}
					onChange={(event) => {
						setSearchString(event.target.value);
					}}
				/>
				<div
					className='h-[36px] px-2 flex justify-center items-center bg-zinc-100 rounded-tr-sm hover:bg-zinc-200 transition-all'
					onClick={() => {
						setExpanded(!expanded);
					}}
				>
					{expanded && <ExpandLessIcon color='primary' fontSize='medium' />}
					{!expanded && <ExpandMoreIcon color='primary' fontSize='medium' />}
				</div>
			</div>
			<div
				className={`${
					expanded ? 'h-52' : 'h-0'
				} bg-brown-light rounded-b-sm overflow-y-scroll overflow-x-hidden transition-all`}
			>
				{isLoading && (
					<div className='h-full w-full flex items-center justify-center'>
						<CircularProgress color='inherit' />
					</div>
				)}
				{!isLoading && (
					<div className='p-4 grid grid-cols-2 gap-4'>
						{items
							?.filter((item) => item.type.toLowerCase() === type.toLowerCase())
							?.filter((item) =>
								searchString !== ''
									? item?.name?.toLowerCase().includes(searchString.toLowerCase())
									: true
							)
							.map((item) => (
								<OutfitItemCard item={item} key={item?.id} />
							))}
					</div>
				)}
			</div>
		</div>
	);
};

export default OutfitClothingTypeInput;
