import { IconButton } from '@mui/material';
import React from 'react';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ItemHeader = ({ title, save, saveFunction, edit, editFunction, delet, deleteFunction }) => {
	return (
		<div className='flex w-full gap-x-4 mb-2'>
			<h1 className='text-4xl font-semibold text-black-brown'>{title}</h1>
			{save && (
				<IconButton aria-label='Save' color='blackBrown' onClick={saveFunction}>
					<SaveIcon />
				</IconButton>
			)}
			{edit && (
				<IconButton aria-label='Edit' color='blackBrown' onClick={editFunction}>
					<EditIcon />
				</IconButton>
			)}
			{delet && (
				<IconButton aria-label='Delete' color='default' sx={{ marginLeft: 'auto' }}>
					<DeleteIcon />
				</IconButton>
			)}
		</div>
	);
};

export default ItemHeader;
