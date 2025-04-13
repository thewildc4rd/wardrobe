import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = ({ selected }) => {
	const router = useRouter();
	const links = [
		{ name: 'Home', url: '/' },
		{ name: 'Items', url: '/items' },
		{ name: 'Outfits', url: '/outfits' },
		{ name: 'Generator', url: '/generator' },
	];

	return (
		<div className='min-h-18 h-18 w-full bg-brown-darkest text-white-pink flex flex-row items-center px-10 gap-x-15'>
			<h1 className='font-[700] text-[28px]'>Wardrobe</h1>
			<div className='gap-x-6 flex flex-row items-center'>
				{links.map((link, index) => (
					<div
						key={index}
						className={`${
							selected == link.name ? 'bg-black-brown font-medium' : 'hover:bg-black-brown/30'
						} px-4 py-1 rounded-[5px] text-base transition-all cursor-pointer`}
						onClick={() => {
							router.push(link.url);
						}}
					>
						<h2>{link.name}</h2>
					</div>
				))}
			</div>
			<div className='gap-x-8 flex flex-row items-center ml-auto'>
				<h2>Log in</h2>
				<div className='h-10 w-10 rounded-full bg-white-pink' />
			</div>
		</div>
	);
};

export default Navbar;
