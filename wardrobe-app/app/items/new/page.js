'use client';

import { Button } from '@mui/material';
import React, { useState } from 'react';
import UploadImage from '@/components/UploadImage';
import { useAuth } from '@/authentication/AuthContext';
import { addItem } from '@/utils/databaseUtils';
import { useRouter } from 'next/navigation';
import ItemInputs from '@/components/ItemInputs';

const NewItemPage = (props) => {
	const [image, setImage] = useState('');
	const [itemData, setItemData] = useState({ colours: [] });
	const [errMsg, setErrMsg] = useState('');
	const { currentUser } = useAuth();
	const router = useRouter();

	const onSubmit = () => {
		let data = {
			...itemData,
			image,
			datePurchased: itemData?.datePurchased ? itemData?.datePurchased?.format('DD-MM-YYYY') : null,
			ownerId: currentUser.uid,
		};
		addItem(data).then(() => {
			router.push('/items');
		});
	};

	return (
		<div className='h-full flex flex-col bg-white-pink px-10 py-6 gap-y-4 items-center pt-15'>
			<h1 className='text-4xl text-black-brown font-bold mb-5'>New Item</h1>
			<div className='flex flex-col gap-4 w-96 mb-10'>
				<UploadImage image={image} setImage={setImage} />
				<ItemInputs itemData={itemData} setItemData={setItemData} setErrMsg={setErrMsg} />
				<Button variant='contained' onClick={onSubmit}>
					Create
				</Button>
			</div>
		</div>
	);
};

export default NewItemPage;
