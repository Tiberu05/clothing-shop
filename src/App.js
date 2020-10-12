import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { StickyContainer, Sticky } from 'react-sticky';

import './App.scss';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import AuthPage from './pages/auth/AuthPage';

import { setCurrentUser, logOut } from './redux/actions/auth';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';

const App = (props) => {

    let unsubscribeFromAuth = null;

    useEffect(() => {
        unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    const userData = {
                        id: snapShot.id,
                        ...snapShot.data()
                    };

                    props.setCurrentUser(userData);
                    // setCurrentUser({ 
                    //     id: snapShot.id, 
                    //     ...snapShot.data() 
                    // });
                })
            } else {
                props.logOut();
            }

        })


        return () => {
            unsubscribeFromAuth();
        }
    }, [])


    return (
        <div>
            <StickyContainer>
                <Sticky topOffset={180}>
                    {({
                        style,
                        isSticky,
                        wasSticky,
                        distanceFromTop,
                        distanceFromBottom,
                        calculatedHeight
                    }) => (
                        <header style={style}>
                            <div className='container'>
                                <Header />
                            </div>
                        </header>
                    )}
                </Sticky>

                <section>
                    <div className='container'>
                        <Switch>
                            <Route exact path='/' component={HomePage} />
                            <Route exact path='/shop' component={ShopPage} />
                            <Route 
                                exact 
                                path='/auth' 
                                render={() => props.currentUser ? (
                                    <Redirect to='/'/>
                                ) : (
                                    <AuthPage />
                                )} />
                        </Switch>
                    </div>
                </section>
                

            </StickyContainer>
            

            
            
        </div>
    )
};

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser
    };
}

export default connect(mapStateToProps, { setCurrentUser, logOut })(App);