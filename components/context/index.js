import React, { createContext, useState, useEffect } from 'react';
export const cartContext = createContext();
import { RecentArival } from '../../utilits/Laptops';
const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [total, setTotal] = useState(0);
	const [subTotal, setSubtotal] = useState(0);
	const [Open, setOpen] = useState(false);
	const [wishList, setwishList] = useState(false);
	const [compare, setCompare] = useState(false);
	useEffect(() => {
		addTotals();
	}, [cartItems]);

	const addCart = (id) => {
		const tempPRoducts = [...RecentArival];
		const product = tempPRoducts.find((item) => item.id === id);

		const cartItem = cartItems.find((item) => item.id === id);
		if (cartItem) {
			cartItem.quantity += 1;
			cartItem.total = cartItem.quantity * cartItem.price;
			return setCartItems([...cartItems]);
		} else {
			product.quantity = 1;
			product.total = product.quantity * product.price;
			setCartItems([...cartItems, product]);
		}
	};

	//
	const addTotals = () => {
		let subTotal = 0;
		cartItems.map((item) => (subTotal += item.total));
		const tempTax = subTotal * 0.02;
		const tax = parseFloat(tempTax.toFixed(2));
		const total = subTotal + tax;
		setSubtotal(subTotal);
		setTotal(total);
	};
	return (
		<div>
			<cartContext.Provider
				value={{
					cartItems,
					total,
					subTotal,
					Open,
					wishList,
					compare,
					addCart,
					setwishList,
					setCompare,
					setOpen,
				}}
			>
				{children}
			</cartContext.Provider>
		</div>
	);
};

export default CartProvider;
