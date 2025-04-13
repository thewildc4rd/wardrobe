import React from 'react';
import NavWardrobeBox from '../NavWardrobeBox';
import { Anek_Devanagari, Palette_Mosaic, Patrick_Hand } from 'next/font/google';
const h1 = Patrick_Hand({ subsets: ['latin'], weight: '400' });

const MiddleWardrobeSection = (props) => {
	/* istanbul ignore next */

	return (
		<div className='w-1/3 border-y-[14px] border-x-[7px] border-wardrobe-border flex flex-col'>
			<div className='h-24 w-full border-wardrobe-border border-b-[14px] flex flex-col justify-end items-center'>
				<NavWardrobeBox
					lidStyle={'bg-purple-medium'}
					boxStyle={'bg-purple-light'}
					text={'generator'}
					link={'/generator'}
				/>
			</div>
			<div className='h-40 w-full border-wardrobe-border border-b-[14px] flex flex-col justify-end items-center' />
			<div className='h-3/8 w-full border-wardrobe-border border-b-[14px] flex flex-col justify-center items-center'>
				<h1 className={`text-7xl font-bold px-8 text-center text-[#EDD9C8] ${h1.className}`}>
					welcome
				</h1>
				<h1 className={`text-5xl font-bold px-8 text-center text-[#EDD9C8] ${h1.className}`}>
					to your
				</h1>
				<h1 className={`text-7xl font-bold px-8 text-center text-[#EDD9C8] ${h1.className}`}>
					wardrobe!
				</h1>
			</div>
			<div className='h-auto w-full border-wardrobe-border flex flex-col justify-end items-center'></div>
		</div>
	);
};

export default MiddleWardrobeSection;
