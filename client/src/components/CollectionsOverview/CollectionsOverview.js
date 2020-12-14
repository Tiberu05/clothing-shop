import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { selectCollections } from '../../redux/selectors/shopSelector';

import Collection from '../collections/Collection';


const CollectionsOverview = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const renderCollections = () => {
        if (props.collections) {
            return props.collections.map(({ id, items, ...otherCollectionProps }) => {
                if (items.length === 0) return null;
                return <Collection key={id} items={items} {...otherCollectionProps} />
            })
    
        }
        
    }

    return (
        <div>
            <h1 className='collections-page-title'>Collections </h1>
            {renderCollections()}
        </div>

    )
};

const mapStateToProps = state => {
    return {
        collections: Object.values(selectCollections(state))
    }
}

export default connect(mapStateToProps, {})(CollectionsOverview);