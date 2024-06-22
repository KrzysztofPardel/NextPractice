import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import Footer from '@/components/Footer/Footer';
import Hotels from '@/components/Hotels/Hotels';
import { dataTypes } from '../../components/Hotels/Hotels';

type ApiResponse = {
	id: number;
	name: string;
	username: string;
	email: string;
}[];

const data: dataTypes[] = [
	{ id: '1', slug: 'triada', name: 'Triada' },
	{ id: '2', slug: 'filozof', name: 'Filozof' },
	{ id: '3', slug: 'artemida', name: 'Artemida' },
];

export const dynamic = 'force-dynamic';

const getData = (): Promise<dataTypes[]> => {
	return new Promise((res, rej) => {
		res(data);
	});
};

const HotelsPage = async () => {
	const data = await getData();
	return (
		<>
			<Hotels source={data} />
		</>
	);
};

export default HotelsPage;
