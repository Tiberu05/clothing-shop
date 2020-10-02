import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../svg/icons_tinted-glass.svg';
import './Header.scss';

const Header = () => {


    return (
        <div className='header'>
            <div className="left-header-items">
                <Link to='/'>
                    <img src={require('../svg/tshirt.svg')} className='logo'></img>
                    {/* <div className='logo devicons devicons-yeoman'></div> */}
                </Link>
            </div>

            <div className='right-header-items'>
                <Link to='/shop'>Shop</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/signin'>Sign In</Link>
                <Link to='/cart'><ion-icon name="cart-outline"></ion-icon></Link>
            </div>
        </div>
    )
};

export default Header;