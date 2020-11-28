import React from 'react';
import { ImCross } from 'react-icons/im';

const CartNav = ({ total, subTotal, cartItems }) => {
	return (
		//
		<div className='cart-wrap'>
			<div className='cart-top-container'>
				{cartItems.map((item, index) => {
					return (
						<div className='cart-top' key={index}>
							<div className='img-container'>
								<img src={`/img/${item.img}.png`} alt='laptop' />
							</div>
							<div className='title-content'>
								<div className='title'>
									<span style={{ fontSize: '15px' }}>{item.quantity} </span> X{' '}
									{item.title}
								</div>
								<div className='price'>{item.total}</div>
							</div>
							<div className='close-btn'>
								<ImCross className='close-icon' />
							</div>
						</div>
					);
				})}
			</div>
			<div className='cart-items'>
				<div className='items'>
					<div className='item'>{cartItems.length} items</div>
					<div className='orginal-price'>{subTotal}</div>
				</div>
				<div className='items'>
					<div className='shipping'>Shipping</div>
					<div className='shipping'>free</div>
				</div>
			</div>
			<div className=' cart-items'>
				<div className='shipping'>Total (tax incl.)</div>
				<div className='total'>{total}</div>
			</div>
			<button className='viewCart'>view Cart</button>
		</div>
	);
};

export default CartNav;
