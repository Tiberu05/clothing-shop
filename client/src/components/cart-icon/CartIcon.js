import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg';
import './CartIcon.scss';


import { selectCartItemsCount } from '../../redux/selectors/cartSelector';




const CartIcon = ({ itemsCount }) => {




    return (
        <NavLink to='/checkout' className='cart-icon option'>
            <ShoppingBag className='shopping-icon' />
            <span className='items-count'>{itemsCount}</span>
        </NavLink>

    )
};

const mapStateToProps = state => {
    return {
        itemsCount: selectCartItemsCount(state)
    }
};


export default connect(mapStateToProps, { })(CartIcon);