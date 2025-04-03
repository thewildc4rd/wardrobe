'use client';

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
		<main>
			<h1>🧥 Your Wardrobe</h1>
			<ul>
				{records?.map((record) => (
					<li key={record.id}>{record.fields.Name || 'Unnamed item'}</li>
				))}
			</ul>
		</main>
	);
}
