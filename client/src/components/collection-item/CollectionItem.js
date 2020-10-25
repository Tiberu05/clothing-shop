import React from 'react';
import { connect } from 'react-redux';

import './CollectionItem.scss';

import { addToCart } from '../../redux/actions/cart';

const CollectionItem = ({ item, addToCart, cartItems }) => {

    const { name, imageUrl, price } = item;



    return (
        <div className='collection-item'>
            <div 
                className='collection-item__image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            >
                <div className='add-to-cart__btn' onClick={() => addToCart(item)}>Add to cart</div>
            </div>
            <div className='collection-item__footer'>
                <span className='item-name'>{name}</span>
                <span className='item-price'>$ {price}</span>
            </div>
            <hr />
        </div>
    )
};

const mapStateToProps = state => {
    return { 
        cartItems: state.cart.cartItems
    }
}

export default connect(mapStateToProps, { addToCart })(CollectionItem);