import { Grid } from '@mui/material';
import React from 'react';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';

const DefaultImage = ({ height, width, style }) => {
	return (
		<Grid
			container
			justifyContent='center'
			alignContent='center'
			height={height}
			width={width}
			data-testid={'default-thumbnail'}
			sx={{ bgcolor: '#e4e4e7', borderRadius: '15px', ...style }}
		>
			<PhotoSizeSelectActualIcon sx={{ color: '#9B9B9B', height: '30%', width: '30%' }} />
		</Grid>
	);
};

export default DefaultImage;
