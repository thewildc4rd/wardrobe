'use client';

import React, { use, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { editItem, getItem } from '@/utils/databaseUtils';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/authentication/AuthContext';
import LoadingPage from '@/components/LoadingPage';
import ItemInputs from '@/components/item/ItemInputs';
import ItemBreadcrumb from '@/components/item/ItemBreadcrumb';
import ItemHeader from '@/components/item/ItemHeader';
import UploadImageFullLength from '@/components/image/UploadImageFullLength';
import dayjs from 'dayjs';

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
		setItemData({
			...item,
			datePurchased: item?.datePurchased ? dayjs(item?.datePurchased, 'DD-MM-YYYY') : null,
		});
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
					<UploadImageFullLength image={image} setImage={setImage} />
				</div>
				<div className='flex-1 px-10 flex flex-col gap-y-1 mb-10'>
					<ItemHeader
						title={'Edit Item'}
						save={true}
						saveFunction={() => {
							onSubmit();
						}}
						delet={true}
					/>
					<ItemInputs itemData={itemData} setItemData={setItemData} setErrMsg={setErrMsg} />
				</div>
			</div>
		</div>
	);
}
