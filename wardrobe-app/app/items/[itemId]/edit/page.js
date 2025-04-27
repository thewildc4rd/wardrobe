'use client';

import React, { use, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { editItem, getItem } from '@/utils/databaseUtils';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/authentication/AuthContext';
import UploadImage from '@/components/UploadImage';
import LoadingPage from '@/components/LoadingPage';
import DefaultImage from '@/components/DefaultImage';
import ItemInputs from '@/components/ItemInputs';
import ItemBreadcrumb from '@/components/ItemBreadcrumb';
import ItemHeader from '@/components/ItemHeader';

export default function ItemsPage({ params }) {
	const [image, setImage] = useState('');
	const [itemData, setItemData] = React.useState({});
	const [errMsg, setErrMsg] = React.useState('');
	const { currentUser } = useAuth();
	const { itemId } = use(params);
	const router = useRouter();

	const { isLoading, data: item } = useQuery({
		queryKey: ['items/' + itemId],
		queryFn: () => getItem(itemId),
	});

	useEffect(() => {
		setItemData(item);
		setImage(item?.image);
	}, [item]);

	if (isLoading) {
		return <LoadingPage />;
	}

	const onSubmit = () => {
		let data = {
			...itemData,
			image,
			datePurchased: itemData?.datePurchased ? itemData?.datePurchased?.format('DD-MM-YYYY') : null,
		};
		editItem(itemId, data).then(() => {
			router.push('/items/' + itemId);
		});
	};

	return (
		<div className='h-full flex flex-col bg-white-pink'>
			<ItemBreadcrumb itemId={itemId} itemName={itemData?.name} edit={true} />
			<div className='w-full flex h-full'>
				<div className='h-[calc(100svh-112px)] w-[40%] flex flex-col'>
					{itemData?.image && (
						<img src={itemData?.image} className='h-full bg-contain object-cover' />
					)}
					{!itemData?.image && (
						<DefaultImage
							type='image'
							height='100%'
							width={'100%'}
							style={{ borderRadius: '0px' }}
						/>
					)}
				</div>
				<div className='flex-1 px-10 flex flex-col gap-y-1 mb-10'>
					<ItemHeader
						title={'Edit Item'}
						save={true}
						saveFunction={() => {
							onSubmit();
						}}
					/>
					<ItemInputs itemData={itemData} setItemData={setItemData} setErrMsg={setErrMsg} />
				</div>
			</div>
		</div>
	);
}
