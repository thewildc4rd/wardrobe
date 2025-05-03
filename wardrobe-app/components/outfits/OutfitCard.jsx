import React from 'react';
import DefaultImage from '../image/DefaultImage';

const OutfitCard = ({ outfit, onClick }) => {
	return (
		<div
			className='shadow-lg bg-white-pink-light pb-5 rounded-lg p-2 flex flex-col items-center gap-y-2 cursor-pointer hover:bg-white transition-all'
			onClick={onClick}
		></div>
	);
};

export default OutfitCard;
