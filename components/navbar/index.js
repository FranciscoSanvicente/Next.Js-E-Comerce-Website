import React, { useState, useEffect, useContext, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from '../../src/globalStyles';
import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { colors } from '../../utilits/styles';
import Navitems from './navItems';
import { Navheader, togglebar } from '../../utilits';
import CartNav from './cartNav';
import { cartContext } from '../context';
import NavToggle from './navToggle';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const [navStick, setNavStick] = useState(false);
	const [navCart, setNavcart] = useState(false);
	const { cartItems, total, subTotal } = useContext(cartContext);
	const ref = useRef(null);

	useEffect(() => {
		if (navCart) {
			const handleSidebarRight = (e) => {
				if (ref.current && !ref.current.contains(event.target)) {
					setNavcart(false);
				}
			};
			document.addEventListener('click', handleSidebarRight);
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener('click', handleSidebarRight);
			};
		}
	});
	useEffect(() => {
		window.addEventListener('scroll', navbarScroll);
		return () => {
			window.removeEventListener('scroll', navbarScroll);
		};
	});
	const navbarScroll = () => {
		if (window.scrollY > 300) {
			setNavStick(true);
		} else {
			setNavStick(false);
		}
	};

	return (
		<>
			<UpperNavWraper>
				<Container>
					{/* upper NAv */}
					<div className='upper-nav'>
						<p className='work-ours'>we are Open 24/7</p>
						<div className='upper-nav-right'>
							<div className='nav-search'>
								<input type='text' className='nav-input' />
								<FaSearch />
							</div>
							<div className='signUp'>
								<p>hey sign in...</p>
							</div>
						</div>
					</div>
				</Container>
			</UpperNavWraper>
			{/* lower nav */}
			<LowerNavWrapper>
				<div className={navStick ? 'nav-wrap nav-sticky' : 'nav-wrap'}>
					<Container>
						<div className='nav '>
							<a href='/' className='nav-barnd'>
								<img src='/img/27.png' alt='' className='img-logo' />
								<h1 className='brand-text'>
									S<span>t</span>ore
								</h1>
							</a>
							{toggle && <div className='overlay'></div>}
							<ul className='nav-ul'>
								{Navheader.map((navbar) => (
									<Navitems key={navbar.id} navbar={navbar} />
								))}
							</ul>
							<ul className={toggle ? 'nav-ul-sm toggle' : 'nav-ul-sm'}>
								<div className='cross-menue' onClick={() => setToggle(false)}>
									<ImCross />
									<p>menue</p>
								</div>
								{Navheader.map((navbar) => (
									<Navitems key={navbar.id} navbar={navbar} />
								))}
								{togglebar.map((navbar) => (
									<NavToggle key={navbar.id} navbar={navbar} />
								))}
							</ul>

							<div className='right-icons'>
								<FaBars
									className='icon-right icon-menue'
									onClick={() => setToggle(true)}
								/>
								<div className='cart' onClick={() => setNavcart(!navCart)}>
									<FaShoppingCart className='icon-right icon-cart' />
									<div className='batch'>{cartItems.length}</div>
									{cartItems.length > 0 && (
										<div className={navCart ? 'cart-nav' : 'hide'} ref={ref}>
											<CartNav
												cartItems={cartItems}
												total={total}
												subTotal={subTotal}
											/>
										</div>
									)}
								</div>
							</div>
						</div>
					</Container>
				</div>
			</LowerNavWrapper>
		</>
	);
};

const fixedAnimation = keyframes`
0% {
		top: -100%
	}
100% { 
		top: 0
	}

`;

const UpperNavWraper = styled.div`
	background: ${colors.camea};

	.upper-nav {
		height: 2.3rem;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.upper-nav-right {
			display: flex;
		}
		.nav-search {
			margin-right: 1rem;
			color: #fff;
		}
		.nav-input {
			display: none;
		}
		p {
			font-size: 11px;
			text-transform: capitalize;
			color: #fff;
		}
	}
`;

const LowerNavWrapper = styled.div`
	.overlay {
		display: block;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: 2;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.nav-wrap {
		display: flex;
		align-items: center;
		width: 100%;
		height: 3.5rem;
		z-index: 100;
		background: #fff;
		transition: all 5s ease;
	}
	.nav-sticky {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		animation: ${fixedAnimation} 0.5s ease;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
	}
	.nav {
		display: flex;
		width: 100%;
		justify-content: space-between;
		height: 100%;
		align-items: center;
	}

	.nav-barnd {
		display: flex;
		height: 100%;
		color: #000;
		text-decoration: none;
		align-items: center;
		span {
			color: ${colors.camea};
		}
	}
	.img-logo {
		align-self: center !important;
		width: 3rem;
		height: 1.8rem;
	}
	.nav-ul {
		display: none;
	}
	.active {
		color: ${colors.camea};
	}
	.nav-ul-sm {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		background: #fff;
		height: 100vh;
		opacity: 0;
		width: 0;
		margin: 0;
		padding: 1rem 0 1rem 1rem;
		overflow: auto;
		z-index: 1000;
		.cross-menue {
			display: block;
			border-bottom: 1px solid #e3e3e3;
			display: flex;
			align-items: center;

			padding-bottom: 0.5rem;

			p {
				text-transform: uppercase;
				margin-left: 0.5rem;
				font-weight: 500;
				font-size: 13px;
			}
		}

		.nav-items {
			list-style: none;
			padding-top: 0.7rem;
		}

		.nav-links {
			text-decoration: none;
			text-transform: capitalize;
			font-size: 13px;
			color: #000;
			:hover {
				color: ${colors.camea};
			}
		}
		.active {
			color: ${colors.camea};
		}
	}
	.right-icons {
		display: flex;
	}

	.icon-right {
		width: 1.5rem;
		height: 1.5rem;
	}
	.icon-menue {
		margin-right: 1rem;
	}
	.toggle {
		width: 50%;
		opacity: 1;
		z-index: 10;
	}
	.cart {
		position: relative;
		cursor: pointer;
	}
	.batch {
		position: absolute;
		background: ${colors.camea};
		padding: 0 0.2rem;
		top: -0.2rem;
		right: -0.2rem;
		font-size: 10px;
		color: #fff;
		border-radius: 100%;
	}
	.cart-nav {
		display: block;
		position: absolute;
		right: 0;
		margin-top: 1.5rem;
		background: #fff;
		z-index: 100;
		width: 18rem;
		height: 23rem;
		border: solid 2px ${colors.camea};

		.cart-top-container {
			height: 7.5rem;
			overflow-y: auto;
			padding: 0.7rem;
			margin-right: 1px;

			::-webkit-scrollbar {
				display: block;
				width: 8px;
			}
			::-webkit-scrollbar-thumb {
				background-color: rgba(0, 0, 0, 0.2);
			}
		}
		.cart-top {
			margin-bottom: 0.7rem;
			display: flex;
			justify-content: space-between;

			.img-container {
				padding: 1rem 0.3rem;
				border-radius: 0.3rem;
				background: ${colors.lightGrey};
				border: 1px solid #ebebeb;
				img {
					width: 4.5rem;
				}
			}

			.title-content {
				margin-left: 1rem;
				font-size: 13px;

				.title {
					line-height: 1.3rem;
					margin-bottom: 0.3rem;
				}
				.price {
					font-size: 16px;
					color: ${colors.camea};
					font-weight: 700;
				}
			}
			.close-btn {
				color: ${colors.grey};
				cursor: pointer;
			}
		}

		.cart-items {
			padding: 1rem 0.7rem;
			border-bottom: 1px solid #e3e3e3;
			font-size: 13px;
			font-weight: 600;
			letter-spacing: 1px;
			.items {
				display: flex;
				line-height: 1.7rem;
				justify-content: space-between;
			}
		}
		.main-items {
		}
		.viewCart {
			float: right;
			margin-right: 0.7rem;
			margin-top: 1rem;
			font-size: 15px;
			width: 8rem;
			height: 2.5rem;
			border: none;
			border-radius: 0.3rem;
			background: ${colors.camea};
			color: #fff;
			text-transform: capitalize;
		}
	}
	.hide {
		display: none;
	}
	.nav-ul-sm::-webkit-scrollbar {
		display: block;
		width: 8px;
	}

	@media screen and (min-width: 992px) {
		.nav-wrap {
			height: 5rem;
		}

		.nav-ul-sm {
			display: none;
		}
		.overlay {
			display: none;
		}

		.nav-ul {
			position: static;
			margin: 0;
			padding: 0;
			display: flex;

			.cross-menue {
				display: none;
			}
			.nav-items {
				list-style: none;
				padding-left: 2rem;
			}
			.nav-links {
				text-decoration: none;
				text-transform: capitalize;
				font-size: 13px;
				font-weight: 500;
				color: #000;
				:hover {
					color: ${colors.camea};
				}
			}
			.active {
				color: ${colors.camea};
			}
		}
	}
`;

export default Navbar;
