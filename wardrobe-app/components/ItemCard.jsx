import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import ImageIcon from '@mui/icons-material/Image';

const ItemCard = ({ item }) => {
	const colours = {
		Navy: { bg: 'bg-[#1B2F76]', text: 'text-white', hover: 'hover:bg-[#1B2F76]/40' },
		Blue: { bg: 'bg-[#659DDF]', text: 'text-black', hover: 'hover:bg-[#659DDF]/40' },
		Teal: { bg: 'bg-[#008080]', text: 'text-white', hover: 'hover:bg-[#008080]/40' },
		Green: { bg: 'bg-[#88A884]', text: 'text-black', hover: 'hover:bg-[#88A884]/40' },
		Cream: { bg: 'bg-[#F3E4CC]', text: 'text-black', hover: 'hover:bg-[#F3E4CC]/40' },
		Yellow: { bg: 'bg-[#F7EA9A]', text: 'text-black', hover: 'hover:bg-[#F7EA9A]/40' },
		Gold: { bg: 'bg-[#CDAA36]', text: 'text-black', hover: 'hover:bg-[#CDAA36]/40' },
		Taupe: { bg: 'bg-[#A09483]', text: 'text-black', hover: 'hover:bg-[#A09483]/40' },
		Orange: { bg: 'bg-[#FFB53D]', text: 'text-black', hover: 'hover:bg-[#FFB53D]/40' },
		Brown: { bg: 'bg-[#805B4B]', text: 'text-white', hover: 'hover:bg-[#805B4B]/40' },
		Red: { bg: 'bg-[#DB5C64]', text: 'text-white', hover: 'hover:bg-[#DB5C64]/40' },
		Burgundy: { bg: 'bg-[#7D001F]', text: 'text-white', hover: 'hover:bg-[#7D001F]/40' },
		Pink: { bg: 'bg-[#E9CAD2]', text: 'text-black', hover: 'hover:bg-[#E9CAD2]/40' },
		Purple: { bg: 'bg-[#A891C0]', text: 'text-black', hover: 'hover:bg-[#A891C0]/40' },
		Grey: { bg: 'bg-[#69696A]', text: 'text-white', hover: 'hover:bg-[#69696A]/40' },
		Silver: { bg: 'bg-[#BEBEBE]', text: 'text-black', hover: 'hover:bg-[BEBEBE]/40' },
		Black: { bg: 'bg-[#000]', text: 'text-white', hover: 'hover:bg-[#000]/40' },
		White: { bg: 'bg-[#E8E8E8]', text: 'text-black', hover: 'hover:bg-[#E8E8E8]/40' },
	};

	return (
		<div className='shadow-lg bg-white-pink-light pb-5 rounded-lg p-2 flex flex-col items-center gap-y-2'>
			{item?.Image.length !== 0 && (
				<img
					src={item?.Image[0]?.url}
					className='flex-1 max-h-[260px] w-full bg-contain rounded-lg object-cover'
				/>
			)}
			{item?.Image.length === 0 && (
				<div className='w-full h-[260px] bg-zinc-200 rounded-lg flex items-center justify-center'>
					<ImageIcon color='disabled' fontSize='large' />
				</div>
			)}
			<p className='text-base font-medium text-center'>{item['Item Name']}</p>
			<div className='flex flex-row gap-2 flex-wrap justify-center'>
				{item['Type'] && (
					<div className='flex items-center border-brown-darkest border-2 text-black-brown px-[14px] rounded-full text-sm hover:bg-brown-darkest/20 transition-all'>
						{item['Type']}
					</div>
				)}
				{item['Brand'] && (
					<div className='flex items-center border-brown-light border-2 text-black-brown px-[14px] rounded-full text-sm hover:bg-brown-light/20 transition-all'>
						{item['Brand']}
					</div>
				)}
			</div>
			<div className='flex flex-row gap-2 flex-wrap justify-center'>
				{item['Colours'].map((colour) => {
					return (
						<div
							key={colour}
							className={`${colours[colour]?.bg} ${colours[colour]?.text} ${colours[colour]?.hover} flex items-center px-4 py-[1px] rounded-full text-sm transition-all`}
						>
							{colour}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ItemCard;
