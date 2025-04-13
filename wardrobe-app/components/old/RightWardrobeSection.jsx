import React from 'react';
import NavWardrobeBox from './NavWardrobeBox';

const RightWardrobeSection = (props) => {
	return (
		<div className='w-1/3 flex border-y-[14px] border-l-[7px] border-r-[14px] border-wardrobe-border'>
			<div className='h-24 w-full border-wardrobe-border border-b-[14px] flex flex-col justify-end items-center'>
				<NavWardrobeBox
					lidStyle={'bg-blue-medium'}
					boxStyle={'bg-blue-light'}
					text={'profile'}
					link={'/profile'}
				/>
			</div>
		</div>
	);
};

export default RightWardrobeSection;
