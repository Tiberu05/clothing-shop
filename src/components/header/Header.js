import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../svg/icons_tinted-glass.svg';
import './Header.scss';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {

    const renderAuthButton = () => {
        if (!currentUser) {
            return <NavLink className='option' activeclass='active' to='/auth'>Sign In</NavLink>
        } else {
            return <a className='option' href='#' onClick={() => auth.signOut()}>Sign Out</a>
        }
    }

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
                <NavLink className='option'activeclass='active' exact to='/cart'><ion-icon name="cart-outline"></ion-icon></NavLink>
            </div>
        </div>
    )
};

export default Header;