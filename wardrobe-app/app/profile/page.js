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
		<div className='h-full flex flex-col items-center bg-white-pink'>
			<div className='w-full h-45 bg-brown-medium flex justify-center py-2'>
				<div className='w-[75%] flex items-end'>
					<div className='h-50 w-50 overflow-hidden rounded-full items-end bg-white-pink flex justify-center relative top-15 border-8 border-brown-darkest'>
						<UserIcon width={'175'} height={'175'} />
					</div>
				</div>
			</div>
			<div className='mt-20 w-[80%] flex flex-row'>
				<div className='flex-1 flex flex-col'>
					<div className='flex flex-col gap-2'>
						<h1 className='ml-6 text-5xl font-semibold text-brown-darkest'>Sabrina</h1>
						<h1 className='ml-6 text-5xl font-semibold text-brown-darkest'>Nahabedian</h1>
					</div>
				</div>
				<div className='flex-1'></div>
			</div>
		</div>
	);
}
