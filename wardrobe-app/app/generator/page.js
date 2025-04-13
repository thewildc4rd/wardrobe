'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';

export default function GeneratorPage() {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		const fetchAirtableData = async () => {
			const res = await fetch('/api/airtable');
			const json = await res.json();
			const newRecords = json.records.map((record) => ({
				id: record?.id,
				createdTime: record?.createdTime,
				...record?.fields,
			}));
			setRecords(newRecords);
		};
		fetchAirtableData();
	}, []);

	const [selectedTopId, setSelectedTopId] = useState(null);
	const [tops, setTops] = useState([]);
	const [bottoms, setBottoms] = useState([]);

	useEffect(() => {
		if (records.length != 0) {
			const topsList = records.filter((record) => ['Top', 'Shirt'].includes(record.Type));
			const bottomsList = records.filter((record) => ['Pants', 'Skirt'].includes(record.Type));
			setBottoms(bottomsList);
			setTops(topsList);

			setSelectedTopId(Math.floor(Math.random() * topsList.length));
		}
	}, [records]);
	return (
		<main className='h-full flex bg-white-pink'>
			<Navbar selected={'Generator'} />

			{selectedTopId && (
				<img
					src={tops[selectedTopId]?.Image[0]?.url}
					className='max-h-[300px] max-w-[90%] rounded-md'
				/>
			)}
		</main>
	);
}
