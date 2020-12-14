import React from 'react';
import { connect } from 'react-redux';


import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg';
import './CartIcon.scss';

import { toggleCart } from '../../redux/actions/cart';
import { selectCartItemsCount } from '../../redux/selectors/cartSelector';




const CartIcon = ({ itemsCount, toggleCart }) => {




    return (
        <div className='cart-icon option' onClick={() => toggleCart() }>
            <ShoppingBag className='shopping-icon' />
            <span className='items-count'>{itemsCount}</span>
        </div>

    )
};

const mapStateToProps = state => {
    return {
        itemsCount: selectCartItemsCount(state)
    }
};


export default connect(mapStateToProps, { toggleCart })(CartIcon);