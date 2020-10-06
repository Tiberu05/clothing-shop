import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import AuthPage from './pages/auth/AuthPage';

import { auth } from './firebase/firebase.utils.js';

const App = () => {

    const [currentUser, setCurrentUser] = useState(null);

    let unsubscribeFromAuth = null;

    useEffect(() => {
        unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            setCurrentUser(user);

            console.log(user);
        })


        return () => {
            unsubscribeFromAuth();
        }
    }, [])

    return (
        <div>

            <header>
                <div className='container'>
                    <Header currentUser={currentUser} />
                </div>
            </header>

            <hr />
            <div className='container'>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/shop' component={ShopPage} />
                    <Route exact path='/auth' component={AuthPage} />
                </Switch>
            </div>
            
        </div>
    )
};

export default App;