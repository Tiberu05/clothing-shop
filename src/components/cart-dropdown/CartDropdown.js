import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/CustomButton';

import './CartDropdown.scss';

import CartItem from '../cart-item/CartItem';

import { selectCartItems } from '../../redux/reducers/cartSelector';

const CartDropdown = (props) => {

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {props.cartItems.map(item => {
                    return <CartItem 
                                imageUrl={item.imageUrl}
                                name={item.name}
                                qty={item.qty}
                                totalPrice={item.totalPrice}
                                
                            />
                })}
            </div>
            <CustomButton>Go to checkout</CustomButton>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        cartItems: selectCartItems(state)
    }
}

export default connect(mapStateToProps, {})(CartDropdown);