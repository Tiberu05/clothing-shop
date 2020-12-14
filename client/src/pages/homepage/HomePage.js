import React from 'react';

import { HomePageContainer } from './HomePage.styles';

import Directory from '../../components/directory/Directory';

const HomePage = () => {
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    )
};

export default HomePage;