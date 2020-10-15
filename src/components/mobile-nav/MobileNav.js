import React from 'react';
import { Link } from 'react-router-dom';
import { toggleNavMenu } from '../../redux/actions/nav';
import { connect } from 'react-redux';

import './MobileNav.scss';

const MobileNav = ({ navMenu, toggleNavMenu }) => {

    

    return (
        <div className='mobile-nav'>
            <div onClick={() => toggleNavMenu()} className='nav-list'>
                <Link to='/shop'><div>Shop</div></Link>
                <Link to='/contact'><div>Contact</div></Link>
                <Link to='/auth'><div>Sign In</div></Link>
            </div>
        </div>
    )
};

export default connect(null, { toggleNavMenu })(MobileNav);