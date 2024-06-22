import React from 'react';
import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import Hotels from '@/components/Hotels/Hotels';
import Slug from '@/components/Hotels/Slug';

const HotelsPage = async ({ params }: { params: { slug: string } }) => {
	const res = await fetch('https://api.adviceslip.com/advice', { cache: 'no-store' });
	const data = await res.json();
	return (
		<>
			{/* @ts-ignore */}
			{JSON.stringify(data)}
			{/* <Slug /> */}
		</>
	);
};

export default HotelsPage;
