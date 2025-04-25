'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { logIn } from '@/authentication/authUtils';
import { Button, TextField } from '@mui/material';

const LogInPage = (props) => {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errMsg, setErrMsg] = useState('');

	const onSubmit = () => {
		logIn(email, password)
			.then(() => {
				router.push('/');
			})
			.catch((error) => {
				if (error.message.includes('invalid-email')) {
					setErrMsg('Invalid Email');
				} else if (error.message.includes('invalid-credential')) {
					setErrMsg('Invalid Password');
				} else {
					setErrMsg(error.message.replace(/[^:]*:\s*|\s*\([^)]*\)/g, ''));
				}
			});
	};

	return (
		<div className='h-full flex flex-col bg-white-pink px-10 py-6 gap-y-4 items-center pt-15'>
			<h1 className='text-4xl text-black-brown font-bold mb-5'>Log in</h1>
			<div className='flex flex-col gap-4 w-96'>
				<TextField
					required
					label='Email'
					variant='outlined'
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
						setErrMsg('');
					}}
				/>
				<TextField
					required
					label='Password'
					type='password'
					variant='outlined'
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
						setErrMsg('');
					}}
				/>
				<Button variant='contained' onClick={onSubmit}>
					Log In
				</Button>
				<div className='text-red-700 text-center'>{errMsg}</div>
				<div className='text-center py-2'>
					Don&apos;t have an account?
					<a className='ml-1 font-semibold hover:underline' href='/signup'>
						Sign up
					</a>
				</div>
				{/* <div className='flex flex-row w-full items-center gap-3'>
        <div className='flex-1 h-[2px] bg-slate-100 rounded-lg' />
        <span className=''>OR</span>
        <div className='flex-1 h-[2px] bg-slate-100 rounded-lg' />
      </div> */}
			</div>
		</div>
	);
};

export default LogInPage;
