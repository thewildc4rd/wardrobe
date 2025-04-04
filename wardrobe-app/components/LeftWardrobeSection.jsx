import React from 'react';
import NavWardrobeBox from './navWardrobeBox';

const LeftWardrobeSection = (props) => {
	return (
		<div className='w-1/3 flex flex-col border-y-[14px] border-r-[7px] border-l-[14px] border-wardrobe-border'>
			<div className='h-24 w-full border-wardrobe-border border-b-[14px] flex flex-col justify-end items-center'>
				<NavWardrobeBox
					lidStyle={'bg-pink-medium'}
					boxStyle={'bg-pink-light'}
					text={'outfits'}
					alternateRotate={true}
				/>
			</div>
			<div className='h-24 w-full border-wardrobe-border border-b-[14px]'></div>
			<div className='h-6/12 w-full border-wardrobe-border border-b-[14px]'>
				<div className='h-3 mt-8 w-full bg-zinc-400' />
			</div>
			<div className='w-full flex-auto bg-wardrobe-front flex flex-col items-center'>
				<div className='h-4 w-full bg-zinc-800' />
				<div className='h-4 w-1/3 rounded-b-2xl bg-zinc-800' />
			</div>
			<div className='w-full flex-auto bg-wardrobe-front flex flex-col items-center'>
				<div className='h-4 w-full bg-zinc-800'></div>
				<div className='h-4 w-1/3 rounded-b-2xl bg-zinc-800'></div>
			</div>
		</div>
	);
};

export default LeftWardrobeSection;
