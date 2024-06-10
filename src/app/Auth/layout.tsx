import React from 'react';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main>
			<Navigation />
			{children}
			<Footer />
		</main>
	);
};

export default Layout;
