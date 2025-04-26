import React from 'react';

const TypePill = ({ type }) => {
	return (
		<div className='flex items-center border-brown-darkest border-2 text-black-brown px-[14px] rounded-full text-sm hover:bg-brown-darkest/20 transition-all cursor-default'>
			{type}
		</div>
	);
};

export default TypePill;
