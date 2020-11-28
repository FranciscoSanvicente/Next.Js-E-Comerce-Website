import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '../../../components/navbar';
import Features from '../../../components/features';
import Footer from '../../../components/footer';
import NewsLetter from '../../../components/NewsLetter.js/index.js';
import GlobalStyle, { Container } from '../../globalStyles';
import DetailBaner from '../../../DetailComponents/DetailBaner';
import Spining from '../../../components/Spining';
import { RecentArival } from '../../../utilits/Laptops';
import CartProvider from '../../../components/context';
import ProductDetail from '../../../DetailComponents/ProductDetail';

const LaptopDetail = () => {
	const [spining, setSpining] = useState(true);
	const router = useRouter();
	const { slug } = router.query;
	useEffect(() => {
		setSpining(true);
		setTimeout(() => {
			setSpining(false);
		}, 2000);
	}, []);

	const laptop = RecentArival.find((laptop) => laptop.slug === slug);

	if (!laptop) {
		return (
			<div className='error'>
				<h3> no such room could be found...</h3>
				<Link href='/' className='btn-primary'>
					<a>back to home</a>
				</Link>
			</div>
		);
	}
	return (
		<>
			<CartProvider>
				<GlobalStyle />
				<Spining spining={spining} />
				<Navbar />
				<DetailBaner />
				<Container>
					<ProductDetail laptop={laptop} />
					<Features title='You Might Also Like' load='true' />
				</Container>
				<NewsLetter />
				<Footer />
			</CartProvider>
		</>
	);
};

export default LaptopDetail;
