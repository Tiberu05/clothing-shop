import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import './ShopPage.scss';

import CollectionPageContainer from '../collection-page/CollectionPage.container';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.container';


//import { getCollectionsAction } from '../../redux/actions/shop';

import { fetchCollectionsAsync, fetchCollectionsStart } from '../../redux/actions/shop';


const  ShopPage = ({ fetchCollectionsStart, match, }) => {


    useEffect(() => {

        fetchCollectionsStart();

    }, [])
    

    return (
        <div className='shop-page'>
            <Route 
                exact 
                path={`${match.path}`} 
                component={CollectionsOverviewContainer} 
            />
            <Route 
                exact 
                path={`${match.path}/:category`} 
                component={CollectionPageContainer}
            />
        </div>
    )

};


export default connect(null, { fetchCollectionsStart })(ShopPage);