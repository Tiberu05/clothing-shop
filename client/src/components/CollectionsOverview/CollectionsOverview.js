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
            const render = props.collections.map(({ id, ...otherCollectionProps }) => {
                return <Collection key={id} {...otherCollectionProps} />
            })
    
            return render;
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