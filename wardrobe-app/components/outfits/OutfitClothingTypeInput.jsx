import React from 'react';

const OutfitClothingTypeInput = ({ items, type }) => {
	return (
		<div>
			<div className='text-lg font-medium'>{type}</div>
			<div className='w-full bg-white px-4 py-2 rounded-sm'>
				<div className='text-sm  opacity-60'>Search for a {type} to add</div>
			</div>
		</div>
	);
};

export default OutfitClothingTypeInput;
