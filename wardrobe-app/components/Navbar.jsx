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
		<div className='h-18 w-full bg-brown-dark text-white-pink flex flex-row items-center px-10 gap-x-15'>
			<h1 className='font-[700] text-[28px]'>Wardrobe</h1>
			<div className='gap-x-6 flex flex-row items-center'>
				{links.map((link, index) => (
					<div
						key={index}
						className={`${
							selected == link.name
								? 'bg-brown-darkest font-medium'
								: 'hover:bg-brown-darkest hover:bg-opacity-10'
						} px-4 py-1 rounded-[5px] text-base transition-all`}
						onClick={() => {
							router.push(link.url);
						}}
					>
						<h2>{link.name}</h2>
					</div>
				))}
			</div>
			<div className='gap-x-8 flex flex-row items-center'></div>
		</div>
	);
};

export default Navbar;
