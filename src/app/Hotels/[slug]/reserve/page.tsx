import React from 'react';
import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import Hotels from '@/components/Hotels/Hotels';
import Slug from '@/components/Hotels/Slug';
import Reserve from '@/components/Hotels/Reserve';

const HotelsPage = () => {
	return (
		<>
			<Navigation />
			<Reserve />
		</>
	);
};

export default HotelsPage;
