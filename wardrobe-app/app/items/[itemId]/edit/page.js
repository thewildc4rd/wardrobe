'use client';

import ItemCard from '@/components/ItemCard';
import Navbar from '@/components/Navbar';
import React, { useState, useEffect, use } from 'react';
import SearchIcon from '@/components/icons/SearchIcon';
import AddIcon from '@/components/icons/AddIcon';
import { CircularProgress, IconButton } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getItem } from '@/utils/databaseUtils';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ColourPill from '@/components/ColourPill';
import BrandPill from '@/components/BrandPill';
import TypePill from '@/components/TypePill';

export default function EditItemsPage({ params }) {
	const { itemId } = use(params);

	const { isLoading, data: item } = useQuery({
		queryKey: ['items/' + itemId],
		queryFn: () => getItem(itemId),
	});

	if (isLoading) {
		return (
			<div className='h-full flex flex-col bg-white-pink px-10 py-6 gap-y-4'>
				<div className='h-full w-full flex items-center justify-center'>
					<CircularProgress color='inherit' />
				</div>
			</div>
		);
	}

	return <></>;
}
