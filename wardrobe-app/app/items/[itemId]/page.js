'use client';

import React, { use } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getItem } from '@/utils/databaseUtils';
import { useRouter } from 'next/navigation';
import DefaultImage from '@/components/image/DefaultImage';
import LoadingPage from '@/components/LoadingPage';
import ItemBreadcrumb from '@/components/item/ItemBreadcrumb';
import ItemHeader from '@/components/item/ItemHeader';
import ItemDisabledInputs from '@/components/item/ItemDisabledInputs';

export default function ItemPage({ params }) {
	const { itemId } = use(params);
	const router = useRouter();

	const { isLoading, data: item } = useQuery({
		queryKey: ['items/' + itemId],
		queryFn: () => getItem(itemId),
	});

	if (isLoading) {
		return <LoadingPage />;
	}

	return (
		<div className='h-full flex flex-col bg-white-pink'>
			<ItemBreadcrumb itemId={itemId} itemName={item?.name} />

			<div className='w-full h-full flex'>
				{item?.image && (
					<img
						src={item?.image}
						className='w-[40%] h-[calc(100svh-112px)] bg-contain object-cover'
					/>
				)}
				{!item?.image && (
					<DefaultImage
						type='image'
						height='calc(100svh-112px)'
						width={'40%'}
						style={{ borderRadius: '0px' }}
					/>
				)}
				<div className='flex-1 px-10 flex flex-col gap-y-1'>
					<ItemHeader
						title={item?.name}
						editFunction={() => {
							router.push('/items/' + itemId + '/edit');
						}}
						edit={true}
					/>
					<ItemDisabledInputs item={item} />
				</div>
			</div>
		</div>
	);
}
