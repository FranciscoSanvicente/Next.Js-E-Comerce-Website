import styled from 'styled-components';
import { colors } from '../../utilits/styles';

export const Slide = styled.div`
	width: 100%;
	.detailbanner,
	.legalbanner,
	.deliverybanner,
	.paymentbanner,
	.defaultHero {
		width: 100%;
		height: 50vh;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: left;
		position: relative;

		::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.4);
		}
	}
	.defaultHero {
		background: center / cover no-repeat url('/img/banner.jpg');
	}
	.detailbanner {
		background: center / cover no-repeat url('/img/blog-4.jpg');
	}
	.deliverybanner {
		background: center / cover no-repeat url('/img/delivery.jpg');
	}
	.legalbanner {
		background: center / cover no-repeat url('/img/blog-1.jpg');
	}
	.paymentbanner {
		background: center / cover no-repeat url('/img/page-3.jpg');
	}
	.bannerSlide-contnt {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 1.5rem;
		width: 90%;

		p {
			text-transform: uppercase;
			color: #fff;
			font-size: 12px;
			z-index: 1;
		}
	}
	.banner-title {
		line-height: 1.3;
		font-size: 1.2rem;
		margin-top: 0.5rem;
		margin-bottom: 1rem;
		text-transform: capitalize;
		letter-spacing: 1px;
		z-index: 1;
		color: #fff;
		width: 80%;
	}

	.banner-title span {
		display: block;
	}
	.banner-button {
		text-decoration: none;
		display: block;
		background: ${colors.camea};
		border: none;
		margin-top: 0.7rem;
		text-align: center;
		width: 10rem;
		padding: 0.5rem 1rem;
		z-index: 1;
		font-size: 12px;
		text-transform: uppercase;
		border-radius: 1.5rem;
		color: #fff;
	}
	@media screen and (min-width: 576px) {
		.banner-title {
			font-size: 1.5rem;
		}
	}
	@media screen and (min-width: 768px) {
		.bannerSlide-contnt {
			width: 70%;
		}
		.banner-title {
			font-size: 1.7rem;
		}
	}
	@media screen and (min-width: 992px) {
		.detailbanner,
		.legalbanner,
		.paymentbanner,
		.deliverybanner,
		.defaultHero {
			height: 75vh;
		}

		.banner-title {
			font-size: 2rem;
		}
	}
	@media screen and (min-width: 1200px) {
		.roombanner,
		.defaultHero {
			height: 80vh;
		}
	}
`;
