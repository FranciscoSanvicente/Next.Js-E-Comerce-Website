import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar';
import Features from '../../../components/features';
import Footer from '../../../components/footer';
import NewsLetter from '../../../components/NewsLetter.js/index.js';
import GlobalStyle, { Container } from '../../globalStyles';
import Spining from '../../../components/Spining';
import Hero from '../../../components/Banner/Hero';
import BannerSlider from '../../../components/Banner/bannerSlider';
import CartProvider from '../../../components/context';

const LaptopDetail = () => {
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
				<Hero hero='detailbanner'>
					<BannerSlider
						title='laptops page'
						subtitle='find the laptop that suits your needs'
					/>
				</Hero>
				<Container>
					<Features title='You Might Also Like' load='true' />
				</Container>
				<NewsLetter />
				<Footer />
			</CartProvider>
		</>
	);
};

export default LaptopDetail;
