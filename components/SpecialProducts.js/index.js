import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { RecentArival } from '../../utilits/Laptops';
import Product from './product';
import { SpicialWrapper } from './styles';
const SpecialPRoducts = () => {
	const [initialState, setInitialState] = useState({
		translate: 0,
		activeSlide: 0,
		transition: 0,
	});
	const Speciallaptops = RecentArival.filter(
		(laptop) => laptop.special === true
	);

	const { translate, activeSlide, transition } = initialState;
	const nextSide = (Speciallaptops, transAmount) => {
		setInitialState({
			...initialState,
			translate:
				activeSlide === Speciallaptops.length - 1 ? 0 : translate - transAmount,
			activeSlide:
				activeSlide === Speciallaptops.length - 1 ? 0 : activeSlide + 1,
			transition: activeSlide === Speciallaptops.length - 1 ? 1.3 : 0.45,
		});
	};

	const previouSide = (Speciallaptops, transAmount) => {
		setInitialState({
			...initialState,
			translate:
				activeSlide === 0
					? translate - transAmount * (Speciallaptops.length - 1)
					: translate + transAmount,
			activeSlide:
				activeSlide === 0 ? Speciallaptops.length - 1 : activeSlide - 1,
		});
	};

	return (
		<SpicialWrapper translate={translate} transition={transition}>
			<div className='special-grid'>
				<div className='special-main'>
					<div className='special-header'>
						<div className='deal'>
							<div className='deal-content'>deal of the day</div>
						</div>
						<div className='feature-arrows'>
							<button
								className='feature-icon icon-left'
								onClick={() => previouSide(Speciallaptops, 20)}
							>
								<FiChevronLeft className='icon' />
							</button>
							<button
								className='feature-icon icon-right'
								onClick={() => nextSide(Speciallaptops, 20)}
							>
								<FiChevronRight className='icon' />
							</button>
						</div>
					</div>
					<div className='special-Products'>
						{Speciallaptops.map((product, index) => (
							<Product
								key={index}
								product={product}
								carousels={Speciallaptops}
							/>
						))}
					</div>
				</div>
				<div className='office-lap'>
					<div className='content'>
						<h1 className='office-title'>home & office computer</h1>
					</div>
				</div>
			</div>
		</SpicialWrapper>
	);
};

export default SpecialPRoducts;
