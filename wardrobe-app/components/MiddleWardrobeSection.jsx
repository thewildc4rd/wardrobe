import React from 'react';
import NavWardrobeBox from './NavWardrobeBox';

const MiddleWardrobeSection = (props) => {
	return (
		<div className='w-1/3 border-y-[14px] border-x-[7px] border-wardrobe-border flex flex-col'>
			<div className='h-24 w-full border-wardrobe-border border-b-[14px] flex flex-col justify-end items-center'>
				<NavWardrobeBox
					lidStyle={'bg-purple-medium'}
					boxStyle={'bg-purple-light'}
					text={'generator'}
				/>
			</div>
			<div className='h-40 w-full border-wardrobe-border border-b-[14px] flex flex-col justify-end items-center' />
			<div className='h-3/8 w-full border-wardrobe-border border-b-[14px] flex flex-col justify-end items-center' />
			<div className='h-auto w-full border-wardrobe-border flex flex-col justify-end items-center'></div>
		</div>
	);
};

export default MiddleWardrobeSection;
