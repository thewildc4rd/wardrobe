import React from 'react';

const AddIcon = ({ colour }) => {
	return (
		<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' width='20' height='20'>
			<g id='SVGRepo_iconCarrier'>
				<path
					d='M4 12H20M12 4V20'
					stroke={colour}
					strokeWidth='3'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
		</svg>
	);
};

export default AddIcon;
