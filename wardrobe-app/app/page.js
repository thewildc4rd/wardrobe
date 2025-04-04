'use client';

import Nav from '@/components/Nav';
import { useEffect, useState } from 'react';

export default function HomePage() {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		const fetchAirtableData = async () => {
			const res = await fetch('/api/airtable');
			const json = await res.json();
			setRecords(json.records);
			console.log(json);
		};
		fetchAirtableData();
	}, []);

	return (
		<main className='bg-linear-to-b from-wardrobe-back to-wardrobe-back-dark h-full flex'>
			<div className='w-1/3 flex flex-col border-y-[14px] border-r-[7px] border-l-[14px] border-wardrobe-border'>
				<div className='h-24 w-full border-wardrobe-border border-b-[14px]'></div>
				<div className='h-24 w-full border-wardrobe-border border-b-[14px]'></div>
				<div className='h-6/12 w-full border-wardrobe-border border-b-[14px]'></div>
				<div className='w-full flex-auto bg-wardrobe-front flex flex-col items-center'>
					<div className='h-4 w-full bg-zinc-800'></div>
					<div className='h-4 w-1/3 rounded-b-2xl bg-zinc-800'></div>
				</div>
				<div className='w-full flex-auto bg-wardrobe-front flex flex-col items-center'>
					<div className='h-4 w-full bg-zinc-800'></div>
					<div className='h-4 w-1/3 rounded-b-2xl bg-zinc-800'></div>
				</div>
			</div>
			<div className='w-1/3 flex border-y-[14px] border-x-[7px] border-wardrobe-border'>
				<div className='h-24 w-full border-wardrobe-border border-b-[14px]'></div>
			</div>
			<div className='w-1/3 flex border-y-[14px] border-l-[7px] border-r-[14px] border-wardrobe-border'>
				<div className='h-24 w-full border-wardrobe-border border-b-[14px]'></div>
			</div>
			{/* <Nav /> */}
			{/* <h1 className={`font-semibold text-2xl`}>Your Wardrobe</h1> */}
			{/* <ul>
				{records?.map((record) => (
					<li key={record.id}>{record.fields.Name || 'Unnamed item'}</li>
				))}
			</ul> */}
		</main>
	);
}
