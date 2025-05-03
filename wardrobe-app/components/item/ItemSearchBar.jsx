import React, { useState } from 'react';
import SearchIcon from '@/components/icons/SearchIcon';
import CrossIcon from '@/components/icons/CrossIcon';

const ItemSearchBar = ({ searchString, setSearchString }) => {
	const [currSearchString, setCurrSearchString] = useState('');

	return (
		<div className='ml-auto flex items-center'>
			{searchString && (
				<div className='flex mr-2 items-center'>
					<div className='text-sm text-brown-darkest'>Search results for "{searchString}"</div>
					<CrossIcon
						className={'cursor-pointer'}
						colour={'#47392D'}
						onClick={() => {
							setSearchString('');
							setCurrSearchString('');
						}}
					/>
				</div>
			)}
			<input
				type='text'
				placeholder='Search'
				title='Search'
				className='bg-brown-dark/10 text-brown-dark border-2 border-brown-dark p-1 px-2 rounded-l-md'
				value={currSearchString}
				onChange={(event) => {
					setCurrSearchString(event.target.value);
				}}
				onKeyDown={(event) => {
					if (event.key === 'Enter') {
						setSearchString(currSearchString);
					}
				}}
			/>
			<div
				className='bg-brown-dark p-[6px] flex items-center rounded-r-md hover:opacity-70 transition-all cursor-pointer'
				onClick={() => {
					setSearchString(currSearchString);
				}}
			>
				<SearchIcon colour={'#F5F2F2'} />
			</div>
		</div>
	);
};

export default ItemSearchBar;
