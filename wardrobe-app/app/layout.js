import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/base/Providers';

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
				<Providers children={children} />
			</body>
		</html>
	);
}
