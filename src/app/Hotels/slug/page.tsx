import React from 'react';
import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import Hotels from '@/components/Hotels/Hotels';
import Slug from '@/components/Hotels/Slug';

const HotelsPage = () => {
	return (
		<>
			<Navigation />
			<Slug />
			<Footer />
		</>
	);
};

export default HotelsPage;
