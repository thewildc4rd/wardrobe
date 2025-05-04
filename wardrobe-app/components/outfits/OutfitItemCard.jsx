import React from 'react';
import ColourPill from '../item/ColourPill';
import TypePill from '../item/TypePill';
import BrandPill from '../item/BrandPill';

const OutfitItemCard = ({ item }) => {
	return (
		<div className='w-full h-30 bg-white-pink-light rounded-lg flex flex-row p-3 gap-x-4'>
			<div
				className={
					'h-full w-28 rounded-md bg-cover bg-center bg-no-repeat overflow-hidden flex justify-center items-center'
				}
				style={{
					backgroundImage: item?.image
						? `url('${item?.image}')`
						: "url('/images/defaultImageSquare.png')",
				}}
			/>
			<div className='flex flex-col gap-2'>
				<div className='font-medium text-lg'>{item?.name}</div>
				<div className='flex flex-row gap-2 flex-wrap'>
					{item?.type && <TypePill type={item.type} />}
					{item?.brand && <BrandPill brand={item.brand} />}
				</div>
				<div className='flex flex-row gap-2 flex-wrap'>
					{item?.colours?.map((colour) => (
						<ColourPill key={colour} colour={colour} />
					))}
				</div>
			</div>
		</div>
	);
};

export default OutfitItemCard;
