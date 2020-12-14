import React from 'react';
import { connect } from 'react-redux';

import './CollectionItem.scss';

import { addToCart } from '../../redux/actions/cart';

const CollectionItem = ({ item, addToCart, cartItems }) => {

    const { name, imageUrl, price } = item;



    return (
        <div className='collection-item'>

            <span className='item-name'>{name}</span>
            <div 
                className='collection-item__image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            >
                
            </div>
            <div className='collection-item__footer'>
                
                <div className='add-to-cart__btn' onClick={() => addToCart(item)}>
                    <div className='item-carticon'>
                        <i className="shopping cart icon"></i>
                        <span>Add to cart</span>
                    </div>
                    <span className='item-price'>$ {price}</span>
                </div>
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