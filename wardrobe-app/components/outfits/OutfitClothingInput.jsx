import React, { useEffect, useState } from 'react';
import OutfitSelectItemCard from './OutfitSelectItemCard';
import { CircularProgress } from '@mui/material';
import OutfitItemSearchBar from './OutfitItemSearchBar';

const OutfitClothingInput = ({ isLoading, items, outfitData, setOutfitData }) => {
	const [searchString, setSearchString] = useState('');
	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		console.log(outfitData);
	}, [outfitData]);

	const selectItem = (itemId) => {
		let newOutfitItems = outfitData.items;
		console.log(newOutfitItems);
		if (newOutfitItems.includes(itemId)) {
			newOutfitItems = newOutfitItems.filter((id) => id !== itemId);
		} else {
			newOutfitItems.push(itemId);
		}
		setOutfitData({ ...outfitData, items: newOutfitItems });
	};
	return (
		<div className='flex-1 flex flex-col'>
			<div className='text-lg font-medium mb-2'>Items</div>
			<OutfitItemSearchBar
				searchString={searchString}
				setSearchString={setSearchString}
				expanded={expanded}
				setExpanded={setExpanded}
			/>
			<div
				className={`${
					expanded ? 'h-96' : 'h-0'
				} shadow- bg-brown-light rounded-b-sm overflow-y-scroll overflow-x-hidden transition-all mr-[40px]`}
			>
				{isLoading && (
					<div className='h-full w-full flex items-center justify-center'>
						<CircularProgress color='inherit' />
					</div>
				)}
				{!isLoading && (
					<div className='p-4 grid grid-cols-3 gap-4'>
						{items
							?.filter((item) =>
								searchString !== ''
									? item?.name?.toLowerCase().includes(searchString.toLowerCase())
									: true
							)
							.map((item) => (
								<OutfitSelectItemCard
									item={item}
									key={item?.id}
									selected={outfitData?.items?.includes(item?.id)}
									onClick={() => {
										selectItem(item?.id);
									}}
								/>
							))}
					</div>
				)}
			</div>
		</div>
	);
};

export default OutfitClothingInput;
