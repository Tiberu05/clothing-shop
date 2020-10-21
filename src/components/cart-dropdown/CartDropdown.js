import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/CustomButton';

import './CartDropdown.scss';

import CartItem from '../cart-item/CartItem';

import { toggleCart, showCart, hideCart } from '../../redux/actions/cart';
import { selectCartItems } from '../../redux/selectors/cartSelector';

const CartDropdown = (props) => {

    

    const renderInfo = () => {
        if (props.cartItems.length === 0) {
            return (
                <div className='cart-items'>Your cart is empty</div>
            )
        } else {
            return (
                <div className='cart-items'>
                    {props.cartItems.map(item => {
                        return <CartItem 
                                    key={item.id}
                                    imageUrl={item.imageUrl}
                                    name={item.name}
                                    qty={item.qty}
                                    totalPrice={item.totalPrice}
                                    
                                />
                    })}
                </div>
            )
        }
    }


    // style={{ top: `${props.position + 70}px`, right: `20px`}}

    return (
            <div className='cart-dropdown' onMouseEnter={props.showCart} >
                {renderInfo()}
                    <CustomButton className='custom-button inverted cart-button' onClick={() => {
                        props.toggleCart();
                        props.history.push('/checkout')
                    }
                    }>Go to checkout</CustomButton>
            </div>
        
    )
};

const mapStateToProps = state => {
    return {
        cartItems: selectCartItems(state)
    }
}

export default withRouter(connect(mapStateToProps, { toggleCart, showCart, hideCart })(CartDropdown));