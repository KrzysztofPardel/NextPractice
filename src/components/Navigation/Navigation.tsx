'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MdOutlineConnectingAirports } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { styles } from './Styles';

const Navigation = () => {
	const pathname = usePathname();
	return (
		<div className={styles.container}>
			<div className={styles.iconsContainer}>
				<MdOutlineConnectingAirports className={styles.logoIcon} />
				<RxHamburgerMenu className={styles.mobileMenuIcon} />
			</div>

			<ul className={styles.linksContainer}>
				<Link href="" className={styles.link}>
					About
				</Link>
				<Link href="" className={styles.link}>
					Hotels
				</Link>
				<Link href="" className={styles.link}>
					Blog
				</Link>
				<Link href="" className={styles.link}>
					Map
				</Link>
				<Link href="" className={styles.link}>
					Profile
				</Link>
				<Link href="" className={styles.link}>
					Travelers
				</Link>
			</ul>
		</div>
	);
};

export default Navigation;
