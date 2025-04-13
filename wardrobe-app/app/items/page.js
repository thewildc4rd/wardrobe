'use client';

import ItemCard from '@/components/ItemCard';
import Navbar from '@/components/Navbar';
import React, { useState, useEffect } from 'react';
import SearchIcon from '@/components/icons/SearchIcon';
import AddIcon from '@/components/icons/AddIcon';
import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function ItemsPage() {
	const [records, setRecords] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchString, setSearchString] = useState('');
	const router = useRouter();
	useEffect(() => {
		const fetchAirtableData = async () => {
			setIsLoading(true);
			const res = await fetch('/api/airtable');
			const json = await res.json();
			const newRecords = json.records.map((record) => ({
				id: record?.id,
				createdTime: record?.createdTime,
				...record?.fields,
			}));
			setRecords(newRecords);
			setIsLoading(false);
		};
		fetchAirtableData();
	}, []);

	return (
		<div className='h-full flex flex-col bg-white-pink px-10 py-6 gap-y-4'>
			<div className='flex flex-row items-center'>
				<div className='flex flex-row items-center gap-6'>
					<h1 className='text-4xl text-black-brown font-bold'>Items</h1>
					<button
						className='bg-black-brown text-white-pink font-medium text-base p-[7px] rounded-md hover:opacity-70 transition-all'
						onClick={() => {
							router.push('/items/new');
						}}
					>
						<AddIcon colour={'#F5F2F2'} />
					</button>
				</div>
				<div className='ml-auto flex items-center'>
					<input
						type='text'
						placeholder='Search'
						title='Search'
						className='bg-brown-dark/10 text-brown-dark border-2 border-brown-dark p-1 px-2 rounded-l-md'
						onChange={(event) => {
							setSearchString(event.target.value);
						}}
					/>
					<div className='bg-brown-dark p-[6px] flex items-center rounded-r-md hover:opacity-70 transition-all'>
						<SearchIcon colour={'#F5F2F2'} />
					</div>
				</div>
			</div>
			{isLoading && (
				<div className='h-full w-full flex items-center justify-center'>
					<CircularProgress color='inherit' />
				</div>
			)}
			{!isLoading && (
				<div className='grid grid-cols-6 grid-rows-2 gap-x-4 flex-wrap gap-y-8'>
					{records
						.filter((record) =>
							searchString !== ''
								? record['Name']?.toLowerCase().includes(searchString.toLowerCase())
								: true
						)
						.map((record) => (
							<ItemCard key={record.id} item={record} />
						))}
				</div>
			)}
		</div>
	);
}
