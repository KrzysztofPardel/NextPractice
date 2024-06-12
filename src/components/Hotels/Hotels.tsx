import React from 'react';
import Link from 'next/link';

const Hotels = () => {
	return (
		<>
			Hotels
			<p className="">Look at Other pages</p>
			<Link href={`/hotels/${}`} className="">
				Go to Slug
			</Link>
		</>
	);
};

export default Hotels;
