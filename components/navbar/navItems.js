import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navitems = ({ navbar }) => {
	const router = useRouter();
	return (
		<>
			<li className='nav-items'>
				<Link href={navbar.link}>
					<a
						className={
							router.pathname == navbar.link
								? ' nav-links active'
								: ' nav-links'
						}
					>
						{navbar.title}
					</a>
				</Link>
			</li>
		</>
	);
};

export default Navitems;
