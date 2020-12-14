import React from 'react';

import './CartItem.scss';


const CartItem = ({ imageUrl, name, totalPrice, qty }) => {
    
    console.log('CART ITEM RENDER');

    return (
        <div className='cart-item'>
            <img className='cart-item__img' alt={imageUrl} src={`${imageUrl}`} />
            <div className='cart-item-details'>
                <span className='cart-item__title'>{name}</span>
                <div className='price__qty'>
                    <span className='cart-item__qty'>Qty: {qty}</span>
                    <span className='cart-item__price'>{totalPrice}$</span>
                </div>

            </div>
        </div>
    )
};


export default CartItem;