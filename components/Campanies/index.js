import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { colors } from '../../utilits/styles';
const CampanyLogos = () => {
	const [width, setWidth] = useState(0);
	const ref = useRef(null);
	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	const handleResize = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const nextSlide = () => {
		const slide = ref.current;
		if (width >= 992) {
			slide.scrollLeft += slide.offsetWidth / 2.9;
		} else {
			slide.scrollLeft += slide.offsetWidth / 0.99;
		}
		if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
			slide.scrollLeft = 0;
		}
	};
	const previouSide = () => {
		const slide = ref.current;
		if (width >= 992) {
			slide.scrollLeft -= slide.offsetWidth / 2.9;
		} else {
			slide.scrollLeft -= slide.offsetWidth / 0.99;
		}
		if (slide.scrollLeft <= 0) {
			slide.scrollLeft = slide.scrollWidth;
		}
	};
	const logos = [1, 2, 3, 4, 5, 6, 7];
	return (
		<LogoWrapper>
			<div className='slider-content' ref={ref}>
				<div className='logo-slider'>
					{logos.map((logo) => {
						return (
							<div className='logo-img' key={logo}>
								<img src={`/img/logo-${logo}.png`} alt='' className='logo' />
							</div>
						);
					})}
				</div>
			</div>
			<div className='feature-arrows'>
				<button className='feature-icon icon-left' onClick={previouSide}>
					<FiChevronLeft className='icon' />
				</button>
				<button className='feature-icon icon-right' onClick={nextSlide}>
					<FiChevronRight className='icon' />
				</button>
			</div>
		</LogoWrapper>
	);
};

const swing = keyframes`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;

const LogoWrapper = styled.div`
	margin-bottom: 2rem;
	width: 100%;
	position: relative;
	overflow: hidden;

	.slider-content {
		width: 100%;
		overflow: hidden;
	}
	.logo-slider {
		padding: 0 1rem;
		display: flex;
		height: 100%;
		align-items: center;
		width: 150%;
		flex-shrink: 0;
		.logo-img {
			width: 17%;
			flex-shrink: 0;
		}
		img {
			width: 40%;
			flex-shrink: 0;
			:hover {
				animation: ${swing} 0.8s linear;
			}
		}
	}

	.feature-icon {
		padding: 0.3rem 0.5rem;
		background: transparent;
		border: 0.5px solid rgba(0, 0, 0, 0.2);
		border-radius: 2px;
		position: absolute;
		top: 35%;

		:hover {
			background: ${colors.camea};
			border: none;
		}
		:active,
		:focus {
			outline: none;
		}
	}
	.icon-left {
		left: 0;
	}
	.icon-right {
		right: 0;
	}
`;

export default CampanyLogos;
