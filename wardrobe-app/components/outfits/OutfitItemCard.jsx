import React, { useEffect } from 'react';
import ColourPill from '../item/ColourPill';
import TypePill from '../item/TypePill';
import BrandPill from '../item/BrandPill';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CrossIcon from '../icons/CrossIcon';

const OutfitItemCard = ({ item, index, outfitData, reorderOutfitItems, remove }) => {
	const upDisabled = index === 0;
	const downDisabled = outfitData?.items?.length - 1 === index;

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
			<div className='flex-1 flex flex-col gap-2'>
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

			<div className='mr-10 h-full flex flex-col justify-center'>
				<button
					className={`h-8 px-2 flex justify-center items-center rounded-sm transition-all ${
						upDisabled ? 'opacity-30' : 'hover:bg-zinc-200 cursor-pointer'
					}`}
					onClick={() => {
						reorderOutfitItems(index, index - 1);
					}}
					disabled={upDisabled}
				>
					<ExpandLessIcon color='primary' fontSize='medium' />
				</button>
				<button
					className={`h-8 px-2 flex justify-center items-center rounded-sm transition-all ${
						downDisabled ? 'opacity-30' : 'hover:bg-zinc-200 cursor-pointer'
					}`}
					onClick={() => {
						reorderOutfitItems(index, index + 1);
					}}
					disabled={downDisabled}
				>
					<ExpandMoreIcon color='primary' fontSize='medium' />
				</button>
			</div>
			<div className='h-full flex flex-col'>
				<CrossIcon
					className={'cursor-pointer'}
					colour={'#47392D'}
					onClick={() => {
						remove();
					}}
				/>
			</div>
		</div>
	);
};

export default OutfitItemCard;
