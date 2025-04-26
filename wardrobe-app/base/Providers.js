'use client';

import React from 'react';
import { AuthProvider } from '@/authentication/AuthContext';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/config/theme';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const Providers = ({ children }) => {
	return (
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<Navbar />
					<main className='flex-1'>{children}</main>
					<Footer />
				</ThemeProvider>
			</QueryClientProvider>
		</AuthProvider>
	);
};

export default Providers;
