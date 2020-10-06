import React, { useState, useEffect } from 'react';

import './SignIn.scss';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { signInWithGoogle } from '../../firebase/firebase.utils.js';


const SignIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = e => {
        e.preventDefault();

        setEmail('');
        setPassword('');
    }


    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form className='sign-in-form' onSubmit={handleSubmit}>
                <FormInput 
                    type='email' 
                    value={email} 
                    required
                    onChange={e => setEmail(e.target.value)}
                    label='Email'
                />
                <FormInput 
                    type='password' 
                    value={password} 
                    required 
                    onChange={e => setPassword(e.target.value)}
                    label='Password'
                />
               
                <div className='button-area'>
                    <CustomButton type='submit' buttonClass='sign-in__btn'>Sign In</CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} buttonClass='google__btn'>Sign in with Google</CustomButton>
                </div>

            </form>

        </div>
    )
}

export default SignIn;