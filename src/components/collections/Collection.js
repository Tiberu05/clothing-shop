import React from 'react';
import { withRouter } from 'react-router-dom';

import './Collection.scss';

import CollectionItem from '../collection-item/CollectionItem';

const Collection = ({ title, items, routeName, history, match }) => {

    const renderItems = () => {
        const render = items.slice(0, 4).map(({ id, ...otherItemProps}) => {
            return (
                <CollectionItem key={id} {...otherItemProps} />
            )
        })

        return render;
    }

    return (
        <div className='shop-collection'>
            <h2 
                className='collection-title'
                onClick={() => history.push(`${match.url}/${routeName}`)}
            >{title.toUpperCase()}</h2>
            <div className='collection-items'>
                {renderItems()}
            </div>
        </div>
    )
};

export default withRouter(Collection);