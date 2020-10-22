import React, { useState } from 'react';
import { connect } from 'react-redux';

import './SignIn.scss';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';


import { googleSignInStart, emailSignInStart } from '../../redux/actions/auth';



const SignIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = e => {
        e.preventDefault();

        const emailAndPassword = {
            email,
            password
        }

        props.emailSignInStart(emailAndPassword)

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
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' onClick={props.googleSignInStart} buttonClass='google__btn'>Sign in with Google</CustomButton>
                </div>

            </form>

            <span className='error-message'>
                {props.errorMessage}
            </span>

        </div>
    )
}

const mapStateToProps = state => ({
    errorMessage: state.auth.error
})

export default connect(mapStateToProps, { googleSignInStart, emailSignInStart })(SignIn);