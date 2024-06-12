import React from 'react';
import { GoogleMapsEmbed } from '@next/third-parties/google';

const Map = () => {
	return (
		<div className="w-screen h-screen">
			<p className="">Welcome to Map section!</p>
			<GoogleMapsEmbed apiKey="XYZ" height={500} width="100%" mode="place" q="Manufaktura,Lodz,PL" />
		</div>
	);
};

export default Map;
