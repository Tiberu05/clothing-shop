import React from 'react';
import { connect } from 'react-redux';

import './CheckoutPage.scss';

import { selectCartItems, cartItemsTotalPrice } from '../../redux/selectors/cartSelector';
import { addToCart, deleteItemFromCart, decreaseItem } from '../../redux/actions/cart';


const CheckoutPage = ({ cartItems, deleteItemFromCart, totalPrice, addToCart, decreaseItem }) => {

    const renderCartItems = () => {
        const render = cartItems.map(item => {
            return (
                <div key={item.id} className='checkout-row'>
                    <div className='checkout-item image'><img src={`${item.imageUrl}`} /></div>
                    <div className='checkout-item name'>{item.name}</div>
                    <div className='checkout-item qty'> 
                        <ion-icon onClick={() => decreaseItem(item)} name="chevron-back-outline"></ion-icon>
                            {item.qty}
                        <ion-icon onClick={() => addToCart(item)} name="chevron-forward-outline"></ion-icon>
                    </div>
                    <div className='checkout-item price'>${item.price}</div>
                    <div className='checkout-item remove-item' onClick={() => deleteItemFromCart(item)}><ion-icon className='remove-icon' name="close-circle-outline"></ion-icon>
                    </div>
                </div>
            );
        });

        return render;
    };

    const renderTotal = () => {
        if (cartItems.length > 0) {
            return (
                <div className='checkout-row'>
                    <div className='checkout-item image'><span className='total-price'></span></div>
                    <div className='checkout-item name'></div>
                    <div className='checkout-item qty'><span className='total-price'>TOTAL: </span></div>
                    <div className='checkout-item price'><span className='total-price total'>${totalPrice}</span></div>
                    <div className='checkout-item remove'></div>
                
                </div>
            )
        } else {
            return <div className='checkout-row'>You have no items in your cart</div>
        }
    }

    return (
        <div className='checkout'>
            <h1>Checkout</h1>
            <div className='checkout-header'>
                <div className='checkout-item image'>Product</div>
                <div className='checkout-item name'>Description</div>
                <div className='checkout-item qty'>Quantity</div>
                <div className='checkout-item price'>Price</div>
                <div className='checkout-item remove'>Remove</div>
            </div>
            <div className='checkout-body'>
                {renderCartItems()}
                {renderTotal()}
            </div>
        </div>
        
    )
};

const mapStateToProps = state => {
    return {
        cartItems: selectCartItems(state),
        totalPrice: cartItemsTotalPrice(state)
    }
}

export default connect(mapStateToProps, { addToCart, deleteItemFromCart, decreaseItem })(CheckoutPage);