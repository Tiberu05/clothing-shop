import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/selectors/shopSelector';

import CollectionItem from '../../components/collection-item/CollectionItem';

import './CollectionPage.scss';

const CollectionPage = (props) => {

    // const specificCollection = props.collections.find(collection => {
    //     if (collection.title.toLowerCase() === props.match.params.category) {
    //         return collection;
    //     }
    // });

    console.log(props.collection);

    const renderCollectionItems = () => {
        const render = props.collection.items.map(item => {
            return <CollectionItem item={item} />
        })

        return render;
    }

    return (
        <div className='collection-page'>
            <h2 className='collection-title'> {props.collection.title}</h2>
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