
import React from 'react';
import Link from 'next/link';
import { MdOutlineConnectingAirports } from 'react-icons/md';
const styles = {
	container: 'w-100% h-3rem flex justify-center gap-1/4 p-3',
	iconsContainer: 'flex items-center p-5',
	logoIcon: 'text-6xl',
	linksContainer: 'w-1/6 flex flex-col items-center p-5',
	link: 'w-4rem p-2',
};
const Footer = () => {
	
	return (
		<div className={styles.container}>
			<div className={styles.iconsContainer}>
				<MdOutlineConnectingAirports className={styles.logoIcon} />
			</div>

			<ul className={styles.linksContainer}>
				<Link href="" className={styles.link}>
					About
				</Link>
				<Link href="" className={styles.link}>
					Privacy Policy
				</Link>
				<Link href="" className={styles.link}>
					Terms
				</Link>
			</ul>
		</div>
	);
};

export default Footer;
