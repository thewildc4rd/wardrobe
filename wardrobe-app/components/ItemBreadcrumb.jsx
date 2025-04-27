import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRouter } from 'next/navigation';

const ItemBreadcrumb = ({ itemId, itemName, edit }) => {
	const router = useRouter();

	return (
		<div className='flex px-10 py-2 gap-x-1 font-medium'>
			<div
				className='hover:underline cursor-pointer'
				onClick={() => {
					router.push('/items');
				}}
			>
				Items
			</div>
			<NavigateNextIcon />
			<div
				className={`${edit ? 'hover:underline cursor-pointer' : 'text-pink-800 cursor-default'}`}
				onClick={() => {
					router.push('/items/' + itemId);
				}}
			>
				{itemName}
			</div>
			{edit && (
				<>
					<NavigateNextIcon />
					<div className='text-pink-800 cursor-default'>Edit</div>
				</>
			)}
		</div>
	);
};

export default ItemBreadcrumb;
