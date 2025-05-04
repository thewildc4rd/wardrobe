import React, { useEffect } from 'react';

const OutfitSelectItemCard = ({ item, onClick, selected }) => {
	return (
		<div
			className={`h-40 rounded-md w-full bg-cover bg-center bg-no-repeat overflow-hidden flex justify-center items-center ${
				selected ? 'border-4 border-red-medium' : ''
			}`}
			style={{
				backgroundImage: item?.image
					? `url('${item?.image}')`
					: "url('/images/defaultImageSquare.png')",
			}}
		>
			<div
				className={`h-full w-full hover:bg-[#373737]/90 opacity-0 hover:opacity-100 transition-all flex flex-col items-center justify-center gap-y-2 px-6 py-4 ${
					selected ? 'hover:bg-red-950/90' : 'hover:bg-zinc-800/90'
				}`}
			>
				<div className='text-sm text-white font-medium text-center'>{item?.name}</div>
				<div className='flex items-center border-white border-2 px-[14px] rounded-full text-sm text-white hover:bg-white/20 transition-all cursor-default'>
					{item?.brand}
				</div>
				<button
					className='w-full bg-white px-4 py-1 rounded-sm hover:bg-white/80 transition-all mt-auto cursor-pointer font-medium text-brown-darkest'
					onClick={onClick}
				>
					{selected ? 'Remove' : 'Add'}
				</button>
			</div>
		</div>
	);
};

export default OutfitSelectItemCard;
