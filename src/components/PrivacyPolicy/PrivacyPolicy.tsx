import React from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
const PrivacyPolicy = () => {
	return (
		<div>
			PrivacyPolicy
			<button className="text-xl border-0.5 p-4" onClick={() => redirect('/')}>
				Home Page Redirect
			</button>
		</div>
	);
};

export default PrivacyPolicy;
