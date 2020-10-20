import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/selectors/shopSelector';

import Spinner from '../../components/spinner/Spinner';
import CollectionItem from '../../components/collection-item/CollectionItem';

import './CollectionPage.scss';

const CollectionPage = (props) => {

    // const specificCollection = props.collections.find(collection => {
    //     if (collection.title.toLowerCase() === props.match.params.category) {
    //         return collection;
    //     }
    // });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const renderCollectionItems = () => {
        if (props.collection) {
            const render = props.collection.items.map(item => {
                return <CollectionItem item={item} />
            })
    
            return render;
        }
    };



    return (
        <div className='collection-page'>
            <h2 className='collection-title'> {props.collection ? `${props.collection.title}` : ""}</h2>
            <div className="items">
                {renderCollectionItems()}
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.category)(state)
    }
}

export default connect(mapStateToProps, {})(CollectionPage);