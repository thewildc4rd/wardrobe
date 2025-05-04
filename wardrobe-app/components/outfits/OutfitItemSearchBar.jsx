import React from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const OutfitItemSearchBar = ({ searchString, setSearchString, expanded, setExpanded }) => {
	return (
		<div className='flex'>
			<input
				className='h-[56px] text-base w-full bg-white px-4 py-2 rounded-tl-sm'
				type='text'
				placeholder={`Search your wardrobe to add items to your outfit...`}
				title='Search'
				value={searchString}
				onChange={(event) => {
					if (!expanded) setExpanded(true);
					setSearchString(event.target.value);
				}}
			/>
			<div
				className='h-[56px] px-2 flex justify-center items-center bg-zinc-100 rounded-tr-sm hover:bg-zinc-200 transition-all cursor-pointer'
				onClick={() => {
					setExpanded(!expanded);
				}}
			>
				{expanded && <ExpandLessIcon color='primary' fontSize='medium' />}
				{!expanded && <ExpandMoreIcon color='primary' fontSize='medium' />}
			</div>
		</div>
	);
};

export default OutfitItemSearchBar;
