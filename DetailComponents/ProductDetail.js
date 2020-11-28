import React, { useContext } from 'react';
import styled from 'styled-components';
import { colors } from '../utilits/styles';
import { FiHeart } from 'react-icons/fi';
import { CgMenuLeft } from 'react-icons/cg';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import Brands from '../components/Banner/Brands';
import { brands } from '../utilits';
import { cartContext } from '../components/context';
const ProductDetail = ({ laptop }) => {
	const { addCart, setOpen, setwishList, setCompare } = useContext(cartContext);
	return (
		<ProductWrapper>
			<div className='cart-top'>
				<div className='brandwrap'>
					<Brands brands={brands} />
				</div>
				<div className='img-wrap'>
					<div className='img-top'>
						<img
							src={`/img/${laptop.img}.png`}
							alt=''
							className='img-top-img'
						/>
					</div>
				</div>
				<div className='cart-info'>
					<div className='info-title'>{laptop.title}</div>
					<div className='info-content'>
						<div className='info-processor'>
							<strong>processor:</strong> {laptop.processor}
						</div>
						<div className='info-size'>
							<strong>size:</strong> {laptop.size}
						</div>
						<div className='info-ram'>
							<strong>ram:</strong> {laptop.Ram}
						</div>
						<div className='info-storage'>
							<strong>storage:</strong> {laptop.storage}
						</div>
						<div className='description'>
							<strong>description:</strong>
							{laptop.description}
						</div>
					</div>
					<div className='colors-wrap'>
						<div className='color-title'>colors</div>
						<div className='colors'>
							<div
								className='color black'
								style={{ background: 'black' }}
							></div>
							<div
								className='color silver'
								style={{ background: 'silver' }}
							></div>
							<div className='color pink' style={{ background: 'pink' }}></div>
							<div className='color blue' style={{ background: 'blue' }}></div>
						</div>
					</div>
					<div className='price'>
						<div className='real-price'>$300.00</div>
						<div className='net-price'>$250.00</div>
						<div className='discount'>save $5:00</div>
						<div className='tax'>tax included</div>
					</div>
					<div className='buttons'>
						<div className='quantity'>
							<div className='quantity-amount'>1</div>
							<div className='arrows'>
								<div className='arrow-up'>
									<FiChevronUp />
								</div>
								<div className='arrow-down'>
									<FiChevronDown />
								</div>
							</div>
						</div>
						<div className='buttons-list'>
							<button
								className='addCart'
								onClick={() => {
									setOpen(true);
									addCart(laptop.id);
								}}
							>
								add to cart
							</button>
							<button
								className='icon-list'
								onClick={() => {
									setwishList(true);
								}}
							>
								<FiHeart />
							</button>
							<button
								className='icon-list'
								onClick={() => {
									setCompare(true);
								}}
							>
								<CgMenuLeft />
							</button>
						</div>
					</div>
					<div className='instock'>In Stock</div>
				</div>
			</div>
		</ProductWrapper>
	);
};
const ProductWrapper = styled.div`
	margin: 2rem 0;
	letter-spacing: 1.3px;
	.img-wrap {
		display: flex;
		justify-content: center;
	}
	.img-top {
		background: ${colors.lightGrey};
		margin: 1rem auto;
		padding: 4rem 2.5rem;
		border-radius: 0.3rem;

		.img-top-img {
			width: 11rem;
		}
	}
	.cart-info {
		text-transform: capitalize;
	}
	.info-price {
		color: ${colors.camea};
		font-weight: 500;
		margin: 0.5rem 0;
	}
	.info-content {
		font-size: 12px;
		color: ${colors.grey};
		line-height: 1.5rem;
	}
	.info-content strong {
		font-size: 14px;
		color: #333;
		margin-right: 2px;
	}
	.color-title {
		margin-top: 1rem;
		font-weight: 600;
	}
	.colors {
		display: flex;
		margin-top: 0.3rem;

		.color {
			width: 2rem;
			height: 2rem;
			border: solid 1px #e3e3e3;
			margin-right: 0.3rem;
		}
	}

	.price {
		display: flex;
		margin: 1rem 0;
		color: ${colors.grey};
		.real-price {
			text-decoration: line-through;
		}
		.discount {
			background: #f39d72;
			color: #fff;
			padding: 0 0.5rem;
			height: 20%;
			flex-shrink: 0;
			margin: 0 0.7rem;
		}
		.net-price {
			color: ${colors.camea};
			font-weight: 700;
			margin-left: 0.7rem;
		}
		.tax {
			font-weight: 700;
			font-size: 14px;
		}
	}
	.buttons {
		display: flex;

		.quantity {
			display: flex;

			.quantity-amount {
				width: 2.5rem;
				height: 2.5rem;
				font-size: 14px;
				border: solid 1px #e3e3e3;
				padding-top: 0.5rem;
				text-align: center;
			}
			.arrows {
				margin: 0 0.5rem;
			}
			.arrow-up,
			.arrow-down {
				cursor: pointer;
				width: 1.5rem;
				height: 1.2rem;
				font-size: 14px;
				border: solid 1px #e3e3e3;
				text-align: center;

				:hover {
					background: ${colors.lightGrey};
				}
			}
		}

		.buttons-list {
			display: flex;

			.addCart {
				font-size: 15px;
				width: 8rem;
				height: 2.5rem;
				border: none;
				border-radius: 0.3rem;
				background: ${colors.camea};
				color: #fff;
				text-transform: capitalize;
				:hover {
					background: #000000;
				}
				:active,
				:focus {
					outline: none;
					border: none;
				}
			}
		}

		.icon-list {
			font-size: 16px;
			margin-left: 0.2rem;
			width: 2.5rem;
			height: 2.5rem;
			border: none;
			border-radius: 0.3rem;

			background: #000000;
			color: #fff;
			text-transform: capitalize;
			transition: all 0.5s ease;
		}
		.icon-list:hover {
			background: ${colors.camea};
			color: #fff;
			transition: all 0.3s ease;
		}
		.icon-list:active,
		.icon-list:focus {
			outline: none;
			border: none;
		}
	}

	.instock {
		background: #4cbb6c;
		color: #fff;
		display: inline-block;
		font-size: 14px;
		padding: 0.1rem 0.4rem;
		margin-top: 0.8rem;
	}
	.brandwrap {
		display: none !important;
	}
	@media screen and (min-width: 768px) {
		.cart-top {
			display: flex;
			justify-content: space-between;
		}
		.img-wrap {
			width: 40%;
			margin-left: 1rem;
		}
		.img-top {
			background: ${colors.lightGrey};
			margin: 0;
			width: 100%;
			padding: 4rem 3rem 0 3rem;
			height: 60%;
			border-radius: 0.3rem;

			.img-top-img {
				min-width: 13rem;
			}
		}
		.cart-info {
			margin-left: 2rem;
			width: 100%;
		}
	}

	@media screen and (min-width: 1005px) {
		.brandwrap {
			display: block !important;
			width: 30%;
			height: 60%;
			padding-left: 1rem !important;
			background: ${colors.lightGrey};
		}
		.img-wrap {
			width: 60%;
			margin-left: 1rem;
		}
		.img-top {
			background: ${colors.lightGrey};
			margin: 0;
			width: 100%;
			padding: 4rem 3rem 0 3rem;
			height: 80%;
			border-radius: 0.3rem;

			.img-top-img {
				width: 100%;
				height: 65%;
			}
		}
	}
`;
export default ProductDetail;
