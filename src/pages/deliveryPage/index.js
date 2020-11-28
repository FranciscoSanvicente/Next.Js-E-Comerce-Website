import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import NewsLetter from '../../../components/NewsLetter.js/index.js';
import GlobalStyle, { Container } from '../../globalStyles';

import Spining from '../../../components/Spining';
import Hero from '../../../components/Banner/Hero';
import BannerSlider from '../../../components/Banner/bannerSlider';
import CartProvider from '../../../components/context';
import PagesContent from '../../../deliveryComponent/PagesContent';

const Delivery = () => {
	const [spining, setSpining] = useState(true);
	useEffect(() => {
		setSpining(true);
		setTimeout(() => {
			setSpining(false);
		}, 2000);
	}, []);

	return (
		<>
			<CartProvider>
				<GlobalStyle />
				<Spining spining={spining} />
				<Navbar />
				<Hero hero='deliverybanner'>
					<BannerSlider
						title='delivery page'
						subtitle='Packages are generally dispatched within 2 days'
					/>
				</Hero>
				<Container>
					<PagesContent
						title='Delivery'
						subtitle='Shipments and returns Your pack shipment'
					/>
				</Container>
				<NewsLetter />
				<Footer />
			</CartProvider>
		</>
	);
};

export default Delivery;
