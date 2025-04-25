'use client';

import Navbar from '@/components/Navbar';
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signUp } from '@/authentication/authUtils';
import { addUser } from '@/utils/databaseUtils';
import { Button, TextField } from '@mui/material';

const SignUpPage = (props) => {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [first, setFirst] = useState('');
	const [last, setLast] = useState('');
	const [errMsg, setErrMsg] = useState('');

	const onSubmit = () => {
		if (password !== confirmPassword) {
			setErrMsg("Passwords don't match.");
			return;
		}
		if (password == '' || email == '' || first == '' || last == '') {
			setErrMsg("Required fields can't be empty.");
			return;
		}
		signUp(email, password, first)
			.then((res) => {
				addUser(res.user.uid, { first, last, email }).then(() => {
					router.push('/');
				});
			})
			.catch((error) => {
				if (error.message.includes('email-already-in-use')) {
					setErrMsg('Email already belongs to an account');
				} else {
					setErrMsg(error.message.replace(/[^:]*:\s*|\s*\([^)]*\)/g, ''));
				}
			});
	};
	return (
		<div className='h-full flex flex-col bg-white-pink px-10 py-6 gap-y-4 items-center pt-15'>
			<h1 className='text-4xl text-black-brown font-bold mb-5'>Sign up</h1>
			<div className='flex flex-col gap-4 w-96'>
				<TextField
					required
					label='First name'
					variant='outlined'
					value={first}
					onChange={(e) => {
						setFirst(e.target.value);
						setErrMsg('');
					}}
				/>
				<TextField
					required
					label='Last name'
					variant='outlined'
					value={last}
					onChange={(e) => {
						setLast(e.target.value);
						setErrMsg('');
					}}
				/>
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
				<TextField
					required
					label='Confirm password'
					type='password'
					variant='outlined'
					value={confirmPassword}
					onChange={(e) => {
						setConfirmPassword(e.target.value);
						setErrMsg('');
					}}
				/>
				<Button variant='contained' onClick={onSubmit}>
					Sign Up
				</Button>
				<div className='text-red-700 text-center'>{errMsg}</div>

				<div className='text-center py-2'>
					Already have an account?
					<a className='ml-1 font-semibold hover:underline' href='/login'>
						Log in
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

export default SignUpPage;
