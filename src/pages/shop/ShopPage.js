import React from 'react';
import { connect } from 'react-redux';

import './ShopPage.scss';

import Collection from '../../components/collections/Collection';

import { selectCollections } from '../../redux/selectors/shopSelector';

const  ShopPage = ({ collections }) => {
    
    const renderCollections = () => {
        const render = collections.map(({ id, ...otherCollectionProps }) => {
            return <Collection key={id} {...otherCollectionProps} />
        })

        return render;
    }

    return (
        <div className='shop-page'>
            <h1 className='collections-page-title'>Collections </h1>
            {renderCollections()}
        </div>
    )

};

const mapStateToProps = state => {
    return {
        collections: selectCollections(state)
    }
}

export default connect(mapStateToProps, {})(ShopPage);