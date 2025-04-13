import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/authentication/AuthContext';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/config/theme';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
	title: 'Wardrobe',
	description: 'Your personal wardrobe',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} h-svh flex flex-col`}>
				<AuthProvider>
					<ThemeProvider theme={theme}>
						<Navbar />
						<main className='flex-1'>{children}</main>
						<Footer />
					</ThemeProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
