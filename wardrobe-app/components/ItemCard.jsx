import React from 'react';
import ImageIcon from '@mui/icons-material/Image';
import { colours } from '@/utils/colourUtils';

const ItemCard = ({ item }) => {
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
