import React from 'react';
import Link from 'next/link';

export interface dataTypes {
	id: string;
	slug: string;
	name: string;
}

interface HotelsProps {
	source: dataTypes[];
}

const getData = async () => {
	const fetchData = await fetch(`https://...`, { cache: 'no-store' });
	const resp = await fetchData.json();
	// const resp = data;
	return resp;
};

const Hotels = ({ source }: HotelsProps) => {
	return (
		<div>
			Hotels
			{source.map(({ id, slug, name }) => {
				return (
					<div>
						<li key={id} className="">
							{name}
						</li>
						<Link href={`/hotels/${slug}`} className="">
							Go to Slug
						</Link>
					</div>
				);
			})}
			<p className="">Look at Other pages</p>
		</div>
	);
};

export default Hotels;
