import React, { useState } from 'react';
import { connect } from 'react-redux';

import './Register.scss'

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { signUpStart } from '../../redux/actions/auth';

const Register = (props) => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSubmit = async e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords don\'t match');
            return;
        }

        try {
            const userObj = {
                email,
                password,
                displayName
            };

            props.signUpStart(userObj);

            // const { user } = await auth.createUserWithEmailAndPassword(email, password);

            // createUserProfileDocument(user, { displayName });



            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

        } catch (err) {
            console.error(err);
        }



    }

    return (
        <div className='register-component'>
            <h2>I don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='register-form' onSubmit={handleSubmit}>
                <FormInput 
                    type='text'
                    value={displayName}
                    required
                    onChange={e => setDisplayName(e.target.value)}
                    label='Display Name'
                />
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
                <FormInput 
                    type='password'
                    value={confirmPassword}
                    required
                    onChange={e => setConfirmPassword(e.target.value)}
                    label='Verify Password'
                />
                <CustomButton type='submit'>Register</CustomButton>
            </form>
        </div>
    )
};

export default connect(null, { signUpStart })(Register);