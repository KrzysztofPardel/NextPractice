import React from 'react';
import Link from 'next/link';

const Hotels = ({ params }: { params: { slug: string } }) => {
	return (
		<>
			Hotels
			<p className="">Look at Other pages</p>
			<Link href={`/hotels/${params.slug}`} className="">
				Go to Slug
			</Link>
		</>
	);
};

export default Hotels;
