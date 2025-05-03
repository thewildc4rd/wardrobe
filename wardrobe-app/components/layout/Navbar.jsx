'use client';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/authentication/AuthContext';
import UserIcon from '../icons/UserIcon';
import { logOut } from '@/authentication/authUtils';

const Navbar = ({}) => {
	const router = useRouter();
	const pathname = usePathname();
	const { userLoggedIn, currentUser } = useAuth();

	const links = [
		{ name: 'Home', url: '/' },
		{ name: 'Items', url: '/items' },
		{ name: 'Outfits', url: '/outfits' },
		{ name: 'Generator', url: '/generator' },
	];

	return (
		<div className='min-h-18 h-18 w-full bg-brown-darkest text-white-pink flex flex-row items-center px-10 gap-x-5'>
			<h1 className='font-[700] text-[28px]'>Wardrobe</h1>
			<div className='gap-x-2 flex flex-row items-center'>
				{links.map((link, index) => (
					<div
						key={index}
						className={`${
							pathname === link.url ? 'bg-black-brown font-medium' : 'hover:bg-black-brown/30'
						} px-4 py-1 rounded-[5px] text-base transition-all cursor-pointer`}
						onClick={() => {
							router.push(link.url);
						}}
					>
						<h2>{link.name}</h2>
					</div>
				))}
			</div>
			<div className='gap-x-2 flex flex-row items-center ml-auto'>
				<div
					className={`${
						pathname === (!userLoggedIn ? '/signup' : '')
							? 'bg-black-brown font-medium'
							: 'hover:bg-black-brown/30'
					} px-4 py-1 rounded-[5px] text-base transition-all cursor-pointer`}
					onClick={async () => {
						if (!userLoggedIn) {
							router.push('/signup');
						} else {
							await logOut();
							router.push('/');
						}
					}}
				>
					<h2>{!userLoggedIn ? 'Sign up' : 'Log out'}</h2>
				</div>
				<div
					className='h-10 w-10 rounded-full bg-white-pink overflow-hidden flex items-center justify-center cursor-pointer border-3'
					onClick={() => {
						router.push(userLoggedIn ? '/profile' : '/login');
					}}
				>
					<UserIcon />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
