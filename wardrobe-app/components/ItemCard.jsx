import React from 'react';
import ImageIcon from '@mui/icons-material/Image';
import ColourPill from './ColourPill';
import BrandPill from './BrandPill';
import TypePill from './TypePill';
import DefaultImage from './DefaultImage';

const ItemCard = ({ item, onClick }) => {
	return (
		<div
			className='shadow-lg bg-white-pink-light pb-5 rounded-lg p-2 flex flex-col items-center gap-y-2 cursor-pointer hover:bg-white transition-all'
			onClick={onClick}
		>
			{item?.image && (
				<img
					src={item?.image}
					className='flex-1 w-full max-h-[260px] bg-contain rounded-lg object-cover'
				/>
			)}
			{!item?.image && (
				<DefaultImage type='image' height='260px' width={'100%'} style={{ borderRadius: '8px' }} />
			)}
			<p className='text-base font-medium text-center'>{item.name}</p>
			<div className='flex flex-row gap-2 flex-wrap justify-center'>
				{item?.type && <TypePill type={item.type} />}
				{item?.brand && <BrandPill brand={item.brand} />}
			</div>
			<div className='flex flex-row gap-2 flex-wrap justify-center'>
				{item?.colours?.map((colour) => (
					<ColourPill key={colour} colour={colour} />
				))}
			</div>
		</div>
	);
};

export default ItemCard;
