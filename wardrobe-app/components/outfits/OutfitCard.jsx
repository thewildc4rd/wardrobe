import React from 'react';
import DefaultImage from '../image/DefaultImage';
import TagPill from './TagPill';

const OutfitCard = ({ outfit, onClick }) => {
	return (
		<div
			className='shadow-lg bg-white-pink-light pb-5 rounded-lg p-2 flex flex-col outfits-center gap-y-2 cursor-pointer hover:bg-white transition-all'
			onClick={onClick}
		>
			<div className='h-[260px] grid grid-cols-2 grid-rows-2 gap-2'>
				{outfit?.items?.map((item, idx) => {
					if (idx >= 4) return;
					return (
						<div key={item?.id}>
							{item?.image && (
								<img
									src={item?.image}
									className='h-full w-full bg-contain object-cover rounded-sm'
								/>
							)}
							{!item?.image && (
								<DefaultImage
									type='image'
									height='100%'
									width={'100%'}
									style={{ borderRadius: '4px' }}
								/>
							)}
						</div>
					);
				})}
			</div>
			<p className='mt-2 text-base font-medium text-center'>{outfit?.name}</p>
			<div className='flex flex-row gap-2 flex-wrap justify-center'>
				{outfit?.tags?.map((tag) => (
					<TagPill key={tag} tag={tag} />
				))}
			</div>
		</div>
	);
};

export default OutfitCard;
