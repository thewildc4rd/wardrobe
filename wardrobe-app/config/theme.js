'use client';

import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#47392D',
		},
		secondary: {
			main: '#5A4839',
		},
		blackBrown: {
			main: '#161310',
		},
		info: {
			main: '#A30D29',
		},
	},
	typography: {
		button: {
			textTransform: 'none',
		},
	},
});
