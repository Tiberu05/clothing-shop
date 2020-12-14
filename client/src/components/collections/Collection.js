import React from 'react';
import { withRouter } from 'react-router-dom';

import './Collection.scss';

import { ReactComponent as RightArrow } from '../../assets/right-arrow.svg';

import CollectionItem from '../collection-item/CollectionItem';

const Collection = ({ title, items, routeName, history, match }) => {

    const renderItems = () => {

        if (items.length < 7) {
            return items.map(item => {
                return <CollectionItem key={item.id} item={item} />
            })
        } else {
            return items.slice(0, 6).map(item => {
                return (
                    <CollectionItem key={item.id} item={item} />
                )
            })
        }
    }

    return (
        <div className='shop-collection'>
            <div className='collection-header'>
                <h2 
                    className='collection-title'
                    onClick={() => history.push(`${match.url}/${routeName}`)}
                >{title.toUpperCase()}</h2>
                <div className='see-all' onClick={() => history.push(`${match.url}/${routeName}`)}>See all</div>
            </div>
            
            <div className='collection-items'>
                {renderItems()}
            </div>
        </div>
    )
};

export default withRouter(Collection);