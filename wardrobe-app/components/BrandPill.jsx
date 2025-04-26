import React from 'react';

const BrandPill = ({ brand }) => {
	return (
		<div className='flex items-center border-brown-light border-2 text-black-brown px-[14px] rounded-full text-sm hover:bg-brown-light/20 transition-all cursor-default'>
			{brand}
		</div>
	);
};

export default BrandPill;
