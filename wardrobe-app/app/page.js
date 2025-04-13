'use client';

import Navbar from '@/components/Navbar';

export default function HomePage() {
	return (
		<main className='h-full flex bg-white-pink'>
			<Navbar selected={'Home'} />
		</main>
	);
}
