import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from '../Hotels/loading';

const Slug = () => {
	const router = useRouter();
	const { slug } = router.query;
	const [advice, setAdvice] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('https://api.adviceslip.com/advice');
				const data = await res.json();
				setAdvice(data.slip.advice);
			} catch (error) {
				console.error('Error while fetching data:', error);
			} finally {
				setLoading(false);
			}
		};

		if (slug) {
			fetchData();
		}
		
	}, [slug]);

	const slugComponent = loading ? <Slug /> : null;

	return (
		<div className="text-xl to-blue-400">
			<p className="text-base divide-amber-300">{slugComponent}</p>
		</div>
	);
};

export default Slug;
