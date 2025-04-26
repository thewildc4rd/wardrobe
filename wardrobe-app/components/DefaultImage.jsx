import { Grid } from '@mui/material';
import React from 'react';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';

const DefaultThumbnail = ({ height, width, style }) => {
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
			<PhotoSizeSelectActualIcon sx={{ color: '#9B9B9B', height: '40%', width: '40%' }} />
		</Grid>
	);
};

export default DefaultThumbnail;
