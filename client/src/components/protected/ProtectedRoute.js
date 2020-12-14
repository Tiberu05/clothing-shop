import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, currentUser: currentUser, ...rest }) => {

    return (
        <Route
            { ...rest}
            render={(props) => {

                if (currentUser.id === 'kEkjO35NXWN0HSECKFKrUradBbW2') {
                    return <Component />
                
                } else {
                    return <Redirect to='/' />
                }
            }}
        />
    )
};

export default ProtectedRoute;