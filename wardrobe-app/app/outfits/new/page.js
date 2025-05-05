'use client';

import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/authentication/AuthContext';
import { addItem, getUserItems } from '@/utils/databaseUtils';
import { useRouter } from 'next/navigation';
import OutfitClothingInput from '@/components/outfits/OutfitClothingInput';
import { useQuery } from '@tanstack/react-query';
import OutfitItemCard from '@/components/outfits/OutfitItemCard';
import OutfitTagInput from '@/components/outfits/OutfitTagInput';

const NewOutfitPage = (props) => {
	const [outfitData, setOutfitData] = useState({ name: '', items: [], tags: [] });
	const [errMsg, setErrMsg] = useState('');
	const { currentUser } = useAuth();
	const router = useRouter();

	const { isLoading, data: items } = useQuery({
		queryKey: ['items'],
		queryFn: () => getUserItems(currentUser.uid),
	});

	const onSubmit = () => {
		let data = {
			...itemData,
			ownerId: currentUser.uid,
		};
		// addOutfit(data).then(() => {
		// 	router.push('/outfits');
		// });
	};

	// direction = -1 for up (earlier in list), direction = 1 for down (later in list)
	const reorderOutfitItems = (currPos, newPos) => {
		let newItems = outfitData.items;

		let item = newItems[currPos];
		newItems[currPos] = newItems[newPos];
		newItems[newPos] = item;

		setOutfitData({ ...outfitData, items: newItems });
	};

	return (
		<div className='h-full flex flex-col bg-white-pink px-10 py-6 gap-y-4 items-center pt-15'>
			<h1 className='text-4xl text-black-brown font-bold mb-5'>New Outfit</h1>
			<div className='flex flex-row gap-20 w-3/4 mb-10 h-full'>
				<div className='h-full flex-1 flex flex-col gap-4'>
					<div className='h-full bg-brown-lightest rounded-sm p-8 flex flex-col gap-y-2'>
						{outfitData?.items
							?.map((itemId) => items.find((item) => item?.id === itemId))
							?.map((item, index) => (
								<OutfitItemCard
									key={item?.id}
									item={item}
									index={index}
									outfitData={outfitData}
									reorderOutfitItems={reorderOutfitItems}
								/>
							))}
					</div>
				</div>
				<div className='h-full flex-1 flex flex-col gap-4'>
					<TextField
						label='Name'
						id='name'
						value={outfitData?.name}
						onChange={(e) => {
							setOutfitData({ ...outfitData, name: e.target.value });
							// setErrMsg('');
						}}
					/>
					<OutfitTagInput outfitData={outfitData} setOutfitData={setOutfitData} />
					<OutfitClothingInput
						isLoading={isLoading}
						items={items}
						outfitData={outfitData}
						setOutfitData={setOutfitData}
					/>
					<Button fullWidth variant='contained' onClick={onSubmit} style={{ marginTop: 'auto' }}>
						Create
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NewOutfitPage;
