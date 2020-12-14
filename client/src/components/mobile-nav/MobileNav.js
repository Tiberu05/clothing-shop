import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// ACTIONS
import { toggleNavMenu } from '../../redux/actions/nav';
import { signOutStart } from '../../redux/actions/auth';


// CSS
import './MobileNav.scss';


const MobileNav = ({ navMenu, toggleNavMenu, isSignedIn, signOutStart, currentUser }) => {

    const authLink = () => {
        if (isSignedIn) {
            return <Link to='/'><div onClick={() => signOutStart()}>Sign Out</div></Link>
        } else {
            return <Link to='/auth'><div>Sign In</div></Link>
        }
    }

    const adminLink = () => {
        if (currentUser) {
            if (currentUser.id === "kEkjO35NXWN0HSECKFKrUradBbW2") {
                return <Link to='/admin'><div>Admin Control</div></Link>
            }
        }
        
    }

    return (
        <div className='mobile-nav'>
            <div onClick={() => toggleNavMenu()} className='nav-list'>
                {adminLink()}
                <Link to='/shop'><div>Shop</div></Link>
                <Link to='/contact'><div>Contact</div></Link>
                {authLink()}
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn,
        currentUser: state.auth.currentUser
    }
}

export default connect(mapStateToProps, { toggleNavMenu, signOutStart })(MobileNav);