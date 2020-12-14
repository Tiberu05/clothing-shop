import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

// CSS
import './Header.scss';

// FIREBASE
import { auth } from '../../firebase/firebase.utils';

// COMPONENTS
import CartIcon from '../cart-icon/CartIcon';


//REDUX
import { logOut } from '../../redux/actions/auth';
import { toggleNavMenu } from '../../redux/actions/nav';
import { selectCartHidden } from '../../redux/selectors/cartSelector';
import { selectCurrentUser } from '../../redux/selectors/userSelector';




const Header = ({ currentUser, toggleNavMenu, navMenuOn }) => {

    const [extraNavClass, setExtraNavClass] = useState('hidden');
    const [shrinked, setShrinked] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.pageYOffset >= 100 ? setShrinked('shrinked') : setShrinked('');
        })
    }, [])


    const renderAuthButton = () => {
        if (!currentUser) {
            return <NavLink className='option' activeclass='active' to='/auth'>Sign In</NavLink>
        } else {
            return <a className='option' onClick={() => auth.signOut()}>Sign Out</a>
        }
    };

    const toggleNavAnimation = () => {
        extraNavClass === 'hidden' ? setExtraNavClass('active') : setExtraNavClass('hidden');
    }

    return (

        <div className={`header ${shrinked}`}>
            
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

            <div className='nav-menu'>
                <CartIcon />
                {navMenuOn && 
                    <ion-icon style={{ marginRight: '5px'}} onClick={() => {

                        toggleNavMenu()
                        
                    }} name="close-outline"></ion-icon>
                }
                {!navMenuOn && 
                    <i onClick={() => {
                        setTimeout(() => {
                            toggleNavMenu()
                        }, 200)
                        toggleNavAnimation()
                    }} className={`bars icon ${extraNavClass}`}></i>
                }

            </div>
            
        </div>      
        
    )
};

const mapStateToProps = state => {
    return {
        currentUser: selectCurrentUser,
        hidden: selectCartHidden,
        navMenuOn: state.nav.navMenuOn
    }

}

export default connect(mapStateToProps, { logOut, toggleNavMenu })(Header);