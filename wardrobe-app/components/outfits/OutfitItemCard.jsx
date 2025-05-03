import React from 'react';
import DefaultImage from '../image/DefaultImage';

const OutfitItemCard = ({ item }) => {
	return (
		<>
			<div className='h-40 rounded-md'>
				{/* {!item?.image && (
					<img
						src=
						className='flex-1 w-full h-full bg-contain rounded-lg object-cover'
					/>
				)} */}
				<div
					className='w-full h-full bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden'
					style={{
						backgroundImage: item?.image
							? `url('${item?.image}')`
							: "url('/images/defaultImageSquare.png')",
					}}
				>
					∂{' '}
				</div>
			</div>
		</>
	);
};

export default OutfitItemCard;
