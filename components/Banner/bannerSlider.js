import React from 'react';
import { Container } from '../../src/globalStyles';
import { brands } from '../../utilits';
import Brands from './Brands';
import Link from 'next/link';
const BannerSlider = ({ title, subtitle }) => {
	return (
		<>
			<Container>
				<div className='bannerwraper'>
					<div className='brandwrap'>
						<Brands brands={brands} className='brands' />
					</div>
					<div className='bannerSlide-contnt'>
						<p>{title}</p>
						<h1 className='banner-title'>{subtitle}</h1>
						<Link href='/detailPage'>
							<a className='banner-button'>explore more</a>
						</Link>
					</div>
				</div>
			</Container>
		</>
	);
};

export default BannerSlider;
