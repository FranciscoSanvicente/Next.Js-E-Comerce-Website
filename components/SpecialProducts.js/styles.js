import styled, { keyframes } from 'styled-components';
import { colors } from '../../utilits/styles';

const animation = keyframes`
0% {
  transform:translateY(0)
}
100% {
  transform:translateY(-27%)
}
`;

export const SpicialWrapper = styled.div`
	margin: 3rem 0;
	.special-main {
		border: solid 3px ${colors.camea};
		width: 100%;
		overflow: hidden;
		:hover .icon-list {
			transition: all 0.5s ease;
			opacity: 1;
		}
		:hover .product-title {
			transition: all 0.5s ease;
			color: ${colors.camea};
		}
	}
	.special-header {
		margin: 0.5rem;
		display: flex;
		justify-content: space-between;
		position: relative;
	}
	.deal {
		padding: 0.3rem 1rem;
		font-size: 12px;
		background: ${colors.camea};
		text-transform: capitalize;
		color: #fff;
	}
	.feature-icon {
		padding: 0.3rem 0.5rem;
		background: transparent;
		border: 0.5px solid rgba(0, 0, 0, 0.2);
		border-radius: 2px;
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
		margin-right: 0.5rem;
	}
	.icon {
		margin-top: 0.2rem;
		margin-right: 0.1rem;
	}

	.special-Products {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		width: 500%;
		flex-shrink: 0;
		transform: translateX(
			${(props) => (props.translate ? props.translate : 0)}%
		);
		transition: all ${(props) => (props.transition ? props.transition : 0)}s
			ease;
	}

	.product {
		width: 20%;
		flex-shrink: 0;
	}
	.product-top {
		display: flex;
		justify-content: space-around;
		height: 18rem;
	}

	.product-img {
		background: ${colors.lightGrey};
		height: 18rem;
		border-radius: 0.7rem;
		width: 60%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;

		.image-active {
			width: 70%;
			height: 50%;
			transition: all 0.5s ease;
		}
	}

	.product-carousel {
		margin-right: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		overflow: auto;
	}
	.carousel-slide {
		height: 140%;
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		animation: ${animation} 2s ease infinite;
	}
	.img-carousel {
		height: 25%;
		display: flex;
		width: 6rem;
		align-items: center;
		margin-bottom: 10%;
		flex-shrink: 0;
		padding: 0 0.5rem;
		background: ${colors.lightGrey};
		border-radius: 0.5rem;
	}
	.image-right {
		height: 60%;
		width: 97%;
		margin: 0 auto;
	}

	.product-description {
		margin: 3rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
	.star {
		color: #cccccc;
	}

	.star-checked {
		color: #ffb700;
	}

	.product-title {
		transition: all 0.5s ease;
		font-size: 15px;
		font-weight: 600;
		margin: 0.2rem 0;
	}
	.product-p {
		font-size: 12px;
		color: ${colors.grey};
	}

	.price {
		margin: 1rem 0;
		font-size: 14px;
		.real-price {
			color: ${colors.grey};

			text-decoration: line-through;
		}
		.dis-count {
			color: red;
			font-weight: 700;
			padding-right: 7px;
			padding-left: 7px;
		}
		.net-price {
			color: ${colors.camea};
			font-weight: 700;
		}
	}

	.time {
		width: 50%;
		display: flex;
		justify-content: space-around;

		.time-count {
			background: #f2f2f2;
			width: 3rem;
			height: 3rem;
			font-weight: 700;
			font-size: 14px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.time-active {
			color: ${colors.camea};
		}
		.time-title {
			text-transform: capitalize;
			font-size: 12px;
			margin-top: 0.2rem;
			font-weight: 500;
			color: ${colors.grey};
		}
	}

	.buttons-list {
		margin-top: 1.2rem;
		/* width: 40%; */
		display: flex;
		justify-content: space-around;

		.addCart {
			font-size: 15px;
			width: 8rem;
			height: 2.5rem;
			border: none;
			border-radius: 0.3rem;
			background: #000000;
			color: #fff;
			text-transform: capitalize;
		}
	}

	.icon-list {
		font-size: 16px;
		margin-left: 0.2rem;
		width: 2.5rem;
		height: 2.5rem;
		border: none;
		border-radius: 0.3rem;
		background: ${colors.camea};
		color: #fff;
		text-transform: capitalize;
		transition: all 0.5s ease;
	}
	.icon-list:hover {
		background: #000000;
		color: #fff;
		transition: all 0.3s ease;
	}

	.office-lap {
		display: none;
	}
	@media screen and (min-width: 600px) {
		:hover .icon-list {
			transition: all 0.5s ease;
			opacity: 1;
		}
		.icon-list {
			opacity: 0;
		}
		.product {
			width: 20%;
			flex-shrink: 0;
			padding: 1rem;
			display: grid;
			grid-template-columns: 1fr 1fr;

			.product-description {
				margin: 0;
				display: block;
				text-align: left;
			}
			.time {
				justify-content: space-between;
				width: 70%;
			}
			.buttons-list {
				justify-content: space-between;
				width: 70%;
			}
		}
	}

	@media screen and (min-width: 992px) {
		.special-grid {
			display: grid;
			grid-template-columns: 4fr 1fr;
			grid-gap: 1rem;
		}

		.office-lap {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			background: right / cover no-repeat url('/img/office-2.jpg');

			height: 27rem;
			padding: 0.5rem;
			position: relative;
			color: #fff;
			border-radius: 0.3rem;
			.content {
				z-index: 10;
			}
			.office-title {
				font-size: 19px;
				text-transform: capitalize;
				font-weight: 700;
				line-height: 1.5rem;
			}
			.offcice-p {
				font-size: 11px;
				margin-top: 0.8rem;
			}
		}
		.office-lap::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border-radius: 0.3rem;
			background: rgba(0, 0, 0, 0.2);
		}
	}
`;
