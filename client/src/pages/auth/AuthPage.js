import React from 'react';

import './AuthPage.scss';

import SignIn from '../../components/signin/SignIn';
import Register from '../../components/register/Register';

const AuthPage = () => {



    return (
        <div className='forms-container'>
            <SignIn />
            <Register />
        </div>
    )
}

export default AuthPage;