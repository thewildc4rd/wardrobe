import { Button, FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';
import CrossIcon from '../icons/CrossIcon';

const OutfitTagInput = ({ outfitData, setOutfitData }) => {
	const [currentTag, setCurrentTag] = useState('');

	const addTag = () => {
		let tag = currentTag.charAt(0).toUpperCase() + currentTag.slice(1);
		if (!outfitData?.tags?.includes(tag)) {
			setOutfitData({ ...outfitData, tags: [...outfitData?.tags, tag] });
			setCurrentTag('');
		}
	};

	return (
		<div className='flex flex-col gap-y-2'>
			<div className='flex gap-x-2'>
				<FormControl fullWidth variant='filled'>
					<TextField
						label='Tags'
						id='tags'
						value={currentTag}
						onChange={(e) => {
							setCurrentTag(e.target.value);
							// setErrMsg('');
						}}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								addTag();
							}
						}}
					/>
				</FormControl>
				<Button
					variant='contained'
					onClick={() => {
						addTag();
					}}
				>
					Add
				</Button>
			</div>
			{outfitData?.tags?.length !== 0 && (
				<div className='flex gap-2 mb-2 flex-wrap'>
					{outfitData?.tags?.map((tag, idx) => {
						return (
							<div
								key={(tag, idx)}
								className={
									'border-2 border-brown-darkest hover:bg-brown-darkest/10 text-brown-darkest cursor-default flex items-center pl-4 pr-3 py-[1px] rounded-full text-sm transition-all gap-x-1'
								}
							>
								{tag}
								<CrossIcon
									className={'cursor-pointer'}
									colour={'#47392D'}
									onClick={() => {
										setOutfitData({
											...outfitData,
											tags: outfitData?.tags?.filter((x, i) => i !== idx),
										});
									}}
								/>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default OutfitTagInput;
