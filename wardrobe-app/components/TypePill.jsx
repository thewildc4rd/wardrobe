import React from 'react';

const TypePill = ({ type, size = 'small' }) => {
	return (
		<div
			className={`flex items-center border-brown-darkest border-2 text-black-brown px-[14px] rounded-full ${
				size === 'small' ? 'text-sm' : size === 'medium' ? 'text-md' : ''
			} hover:bg-brown-darkest/20 transition-all cursor-default`}
		>
			{type}
		</div>
	);
};

export default TypePill;
