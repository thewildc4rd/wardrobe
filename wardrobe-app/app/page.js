'use client';

import Navbar from '@/components/Navbar';

export default function HomePage() {
	return (
		<>
			<Navbar selected={'Home'} />
			<main className='h-full flex bg-white-pink'></main>
		</>
	);
}
