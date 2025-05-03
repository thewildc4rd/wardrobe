'use client';

import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useAuth } from '@/authentication/AuthContext';
import { addItem, getUserItems } from '@/utils/databaseUtils';
import { useRouter } from 'next/navigation';
import OutfitClothingTypeInput from '@/components/outfits/OutfitClothingTypeInput';
import { useQuery } from '@tanstack/react-query';

const NewOutfitPage = (props) => {
	const [outfitData, setOutfitData] = useState();
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

	return (
		<div className='h-full flex flex-col bg-white-pink px-10 py-6 gap-y-4 items-center pt-15'>
			<h1 className='text-4xl text-black-brown font-bold mb-5'>New Outfit</h1>
			<div className='flex flex-col gap-4 w-96 mb-10'>
				<OutfitClothingTypeInput items={items} type={'Top'} />
				<Button variant='contained' onClick={onSubmit}>
					Create
				</Button>
			</div>
		</div>
	);
};

export default NewOutfitPage;
