import React, { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import OfferBaner from '../../components/Banner/OfferBaner';
import CampanyLogos from '../../components/Campanies';
import CartProvider from '../../components/context';
import Features from '../../components/features';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import NewsLetter from '../../components/NewsLetter.js';
import Ourblog from '../../components/Ourblog';
import Services from '../../components/services';
import SpecialPRoducts from '../../components/SpecialProducts.js';
import Spining from '../../components/Spining';
import Subbaners from '../../components/SubBanner';
import { SubbannerRight, SubbannerLeft } from '../../utilits/Laptops';
import GlobalStyle, { Container } from '../globalStyles';
import styled from 'styled-components';
import BannerSlider from '../../components/Banner/bannerSlider';
import Brands from '../../components/Banner/Brands';
import { brands } from '../../utilits';
import Hero from '../../components/Banner/Hero';
const index = () => {
	const [spining, setSpining] = useState(true);
	useEffect(() => {
		setSpining(true);
		setTimeout(() => {
			setSpining(false);
		}, 1000);
	}, []);
	return (
		<>
			<CartProvider>
				<GlobalStyle />
				<Spining spining={spining} />
				<Navbar />
				<Hero>
					<BannerSlider
						title='home page'
						subtitle='welcome our site to get the best products'
					/>
				</Hero>
				<Container>
					<Subbaners subbanners={SubbannerRight} />
					<OfferBaner />
					<Features title='Recent Arrival' />
					<Services />
					<SpecialPRoducts />
					<Ourblog />
					<CampanyLogos />
					<Subbaners inverse='true' subbanners={SubbannerLeft} />
				</Container>
				<NewsLetter />
				<Footer />
			</CartProvider>
		</>
	);
};

export default index;

{
	/* <div className='bannerwraper'>
	<div className='brandwrap'>
		<Brands brands={brands} className='brands' />
	</div>
	<Hero>
		<BannerSlider
			title='luxurious rooms'
			subtitle='deluxe rooms starting at $299'
		/>
	</Hero>
</div>; */
}
