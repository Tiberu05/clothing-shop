import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import './Header.scss';

import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import { logOut } from '../../redux/actions/auth';


const Header = ({ currentUser, hidden }) => {

    const renderAuthButton = () => {
        if (!currentUser) {
            return <NavLink className='option' activeclass='active' to='/auth'>Sign In</NavLink>
        } else {
            return <a className='option' href='#' onClick={() => auth.signOut()}>Sign Out</a>
        }
    };

    return (

        <div className='header'>
            <div className="left-header-items">
                <Link to='/'>
                    {/* <img src={require('../svg/tshirt.svg')} className='logo'></img> */}
                    Home
                </Link>
            </div>

            <div className='right-header-items'>
                <NavLink className='option' activeclass='active' exact to='/shop'>Shop</NavLink>
                <NavLink className='option' activeclass='active' exact to='/contact'>Contact</NavLink>
                {renderAuthButton()}
                {/* <NavLink className='option'activeclass='active' exact to='/cart'><ion-icon name="cart-outline"></ion-icon></NavLink> */}
                <CartIcon />
            </div>

            {hidden ? null : <CartDropdown />}

            <div className='nav-menu'>
                <i class="bars icon"></i>
            </div>

            
        </div>      
        
    )
};

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
        hidden: state.cart.hidden
    }
}

export default connect(mapStateToProps, { logOut })(Header);