'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/authentication/AuthContext';
import UserIcon from '@/components/icons/UserIcon';

export default function ProfilePage({}) {
	const { userLoggedIn, currentUser } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!userLoggedIn) {
			router.push('/login');
		}
	}, []);

	return (
		<div className='h-full flex flex-col bg-white-pink'>
			<div className='h-36 bg-pink-medium flex justify-center py-2'>
				<div className='w-[50%] flex items-end'>
					<div className='h-36 w-36 overflow-hidden rounded-full items-end bg-white-pink flex justify-center relative top-12 border-8 border-brown-darkest'>
						<UserIcon width={'120'} height={'120'} />
					</div>
					<div className='flex flex-col'>
						<h1 className='ml-6 text-4xl font-bold text-brown-darkest'>Sabrina</h1>
						<h1 className='ml-6 text-3xl font-medium text-brown-darkest'>Nahabedian</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
