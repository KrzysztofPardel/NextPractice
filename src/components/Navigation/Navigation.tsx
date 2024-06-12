'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MdOutlineConnectingAirports } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { styles } from './Styles';

const NAV_ITEMS = [
	{
		href: '/about',
		label: 'About',
	},
	{
		href: '/hotels',
		label: 'Hotels',
	},
	{
		href: '/blog',
		label: 'Blog',
	},
	{
		href: '/map',
		label: 'Map',
	},
	{
		href: '/profile',
		label: 'Profile',
	},
	{
		href: '/travelers',
		label: 'Travelers',
	},
];

const Navigation = () => {
	const pathname = usePathname();
	return (
		<div className={styles.container}>
			<div className={styles.iconsContainer}>
				<MdOutlineConnectingAirports className={styles.logoIcon} />
				<RxHamburgerMenu className={styles.mobileMenuIcon} />
			</div>

			<ul className={styles.linksContainer}>
				{NAV_ITEMS.map(({ href, label }) => {
					return (
						<Link
							key={label}
							href={href}
							className={`${styles.link} ${pathname === href ? 'text-yellow-400 underline' : ''}`}
						>
							{label}
						</Link>
					);
				})}
			</ul>
		</div>
	);
};

export default Navigation;
