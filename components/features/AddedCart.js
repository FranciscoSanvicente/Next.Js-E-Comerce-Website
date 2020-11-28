import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
const AddedCart = ({ setOpen, laptop }) => {
	return (
		<div className='cart-content add-cart'>
			<div className='cart-header'>
				<div className='title'>
					<FaCheck className='tick-icon' />
					<div className='title-text'>
						PRODUCT SUCCESSFULLY ADDED TO YOUR SHOPPING CART
					</div>
				</div>
				<div
					className='cross-icon'
					onClick={() => setOpen(false)}
					style={{ cursor: 'pointer' }}
				>
					<ImCross />
				</div>
			</div>
			<div className='cart-main'>
				<div className='cart-top'>
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
						<div className='info-price'>{laptop.price}</div>
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
						</div>
					</div>
				</div>
				<div className='cart-checkout'>
					<div className='little-info'>There Are 2 Items In Your Cart.</div>
					<div className='info-content'>
						<div className='subtotal'>
							<strong>subtotal:</strong> €163.00
						</div>
						<div className='shipping'>
							<strong>shipping:</strong> Free
						</div>
						<div className='total'>
							<strong>Total (tax incl.)</strong> €163.00
						</div>
					</div>
					<div className='cart-buttons'>
						<button className='btn-cart shoping-btn'>continue shoping</button>
						<button className='btn-cart check-btn'>proceed to checkout</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddedCart;
