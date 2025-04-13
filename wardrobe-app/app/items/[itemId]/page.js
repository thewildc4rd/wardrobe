'use client';

import ItemCard from '@/components/ItemCard';
import Navbar from '@/components/Navbar';
import React, { useState, useEffect } from 'react';
import SearchIcon from '@/components/icons/SearchIcon';
import AddIcon from '@/components/icons/AddIcon';
import { CircularProgress } from '@mui/material';

export default function ItemsPage() {
	const [records, setRecords] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchString, setSearchString] = useState('');

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
		<>
			<Navbar selected={'Items'} />
			<main className='flex-1 flex flex-col bg-white-pink px-10 py-6 gap-y-4'></main>
		</>
	);
}
