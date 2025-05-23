'use client';

import React, { useState } from 'react';
import AddIcon from '@/components/icons/AddIcon';
import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getUserItems } from '@/utils/databaseUtils';
import { useAuth } from '@/authentication/AuthContext';
import ItemCard from '@/components/item/ItemCard';
import ItemSearchBar from '@/components/item/ItemSearchBar';

export default function ItemsPage() {
	const [searchString, setSearchString] = useState('');
	const router = useRouter();
	const { currentUser } = useAuth();

	const { isLoading, data: items } = useQuery({
		queryKey: ['items'],
		queryFn: () => getUserItems(currentUser.uid),
	});

	return (
		<div className='h-full flex flex-col bg-white-pink px-10 py-6 gap-y-4'>
			<div className='flex flex-row items-center'>
				<div className='flex flex-row items-center gap-6'>
					<h1 className='text-4xl text-black-brown font-bold'>Items</h1>
					<button
						className='bg-black-brown text-white-pink font-medium text-base p-[7px] rounded-md hover:opacity-70 transition-all cursor-pointer'
						onClick={() => {
							router.push('/items/new');
						}}
					>
						<AddIcon colour={'#F5F2F2'} />
					</button>
				</div>
				<ItemSearchBar searchString={searchString} setSearchString={setSearchString} />
			</div>
			{isLoading && (
				<div className='h-full w-full flex items-center justify-center'>
					<CircularProgress color='inherit' />
				</div>
			)}
			{!isLoading && (
				<div className='grid grid-cols-6 grid-rows-2 gap-x-4 flex-wrap gap-y-8'>
					{items
						?.filter((item) =>
							searchString !== ''
								? item?.name?.toLowerCase().includes(searchString.toLowerCase())
								: true
						)
						?.map((item) => (
							<ItemCard
								key={item.id}
								item={item}
								onClick={() => router.push('/items/' + item.id)}
							/>
						))}
				</div>
			)}
		</div>
	);
}
