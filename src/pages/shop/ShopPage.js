import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import './ShopPage.scss';

import Spinner from '../../components/spinner/Spinner';
import Collection from '../../components/collections/Collection';
import CollectionPage from '../collection-page/CollectionPage';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';

import { firestore, convertCollectionsSnapshot } from '../../firebase/firebase.utils';

import { getCollectionsAction } from '../../redux/actions/shop';
import { selectCollections } from '../../redux/selectors/shopSelector';


const CollectionsWithSpinner = Spinner(CollectionsOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage);

const  ShopPage = ({ collections, getCollectionsAction, match }) => {

    const [loading, setLoading] = useState(true);

    let unsubscribeFromSnapshot = null;

    useEffect(() => {
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapShot => {
            const collections = convertCollectionsSnapshot(snapShot)
            getCollectionsAction(collections);
            setLoading(false);
        })
    }, [])
    
    // const renderCollections = () => {
    //     const render = collections.map(({ id, ...otherCollectionProps }) => {
    //         return <Collection key={id} {...otherCollectionProps} />
    //     })

    //     return render;
    // }

    console.log(collections);

    return (
        <div className='shop-page'>\
            <Route 
                exact 
                path={`${match.path}`} 
                render={(props) => (
                <CollectionsWithSpinner isLoading={loading} {...props} /> )}
            />
            <Route 
                exact 
                path={`${match.path}/:category`} 
                render={props => (
                    <CollectionPageWithSpinner isLoading={loading} {...props} />
                )} 
            />
        </div>
    )

};

const mapStateToProps = state => {
    return {
        collections: Object.values(selectCollections(state))
    }
}

export default connect(mapStateToProps, { getCollectionsAction })(ShopPage);