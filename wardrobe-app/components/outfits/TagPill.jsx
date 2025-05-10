import React from 'react';

const TagPill = ({ tag, size = 'small' }) => {
	return (
		<div
			className={`flex items-center border-brown-light border-2 text-black-brown px-[14px] rounded-full ${
				size === 'small' ? 'text-sm' : size === 'medium' ? 'text-md' : ''
			} hover:bg-brown-light/20 transition-all cursor-default`}
		>
			{tag}
		</div>
	);
};

export default TagPill;
