'use client';

import LeftWardrobeSection from '@/components/LeftWardrobeSection';
import MiddleWardrobeSection from '@/components/MiddleWardrobeSection';
import Nav from '@/components/Nav';
import RightWardrobeSection from '@/components/RightWardrobeSection';
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
			<LeftWardrobeSection />
			<MiddleWardrobeSection />
			<RightWardrobeSection />
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
