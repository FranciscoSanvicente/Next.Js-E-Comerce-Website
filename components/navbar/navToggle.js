import React from 'react';
import Link from 'next/link';
const NavToggle = ({ navbar }) => {
	return (
		<li className='nav-items'>
			<Link href='/detailPage'>
				<a className='nav-links'>{navbar.title}</a>
			</Link>
		</li>
	);
};

export default NavToggle;
