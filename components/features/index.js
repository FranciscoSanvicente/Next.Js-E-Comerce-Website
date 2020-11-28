import React, { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { RecentArival } from '../../utilits/Laptops';
import CardFeatures from './CardFeatures';
import { FeaturesHearder, FeatureCard, FeatureWrapper } from './styles';


const Features = ({ title, load }) => {
	const [width, setWidth] = useState(0);
	const ref = useRef(null);
	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleResize = () => {
		setWidth(window.innerWidth);
	};
	const nextSlide = () => {
		const slide = ref.current;
		if (width >= 669 && width <= 1200) {
			slide.scrollLeft += slide.offsetWidth / 2.97;
		} else {
			slide.scrollLeft += slide.offsetWidth / 1.99;
		}

		if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
			slide.scrollLeft = 0;
		}
	};
	const previouSide = () => {
		const slide = ref.current;
		if (width >= 669 && width <= 1200) {
			slide.scrollLeft -= slide.offsetWidth / 2.99;
		} else {
			slide.scrollLeft -= slide.offsetWidth / 1.99;
		}
		if (slide.scrollLeft <= 0) {
			slide.scrollLeft = slide.scrollWidth;
		}
	};
	return (
		<>
			<FeaturesHearder>
				<div className='featues-header'>
					<h2 className='features-title'>{title}</h2>
					<div className='features-nav'>
						<ul className='features-ul'>
							<li className='feature-items'>
								<a href='' className='feature-links'>
									Laptops
								</a>
							</li>
							<li className='feature-items'>
								<a href='' className='feature-links'>
									New Brands
								</a>
							</li>
							<li className='feature-items'>
								<a href='' className='feature-links'>
									Accessories
								</a>
							</li>
						</ul>
						<div className='feature-arrows'>
							<button className='feature-icon icon-left' onClick={previouSide}>
								<FiChevronLeft className='icon' />
							</button>
							<button className='feature-icon icon-right' onClick={nextSlide}>
								<FiChevronRight className='icon' />
							</button>
						</div>
					</div>
				</div>
			</FeaturesHearder>
			<FeatureCard>
				<div className='features-grid'>
					<div className='office-lap'>
						<div className='content'>
							<h1 className='office-title'>home & office computer</h1>
							<p className='offcice-p'>
								It is a long established fact that....
							</p>
						</div>
						<button className='office-btn'>shop now</button>
					</div>
					<div className='card-slder-wrap' ref={ref}>
						<div className='card-slider'>
							{RecentArival.map((laptop, index) => (
								<CardFeatures key={index} laptop={laptop} load={load} />
							))}
						</div>
					</div>
				</div>
			</FeatureCard>
		</>
	);
};

export default Features;
