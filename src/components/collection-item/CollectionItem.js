import React from 'react';

import './CollectionItem.scss';

const CollectionItem = ({ name, imageUrl, price }) => {


    return (
        <div className='collection-item'>
            <div 
                className='collection-item__image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            >
                <div className='add-to-cart__btn'>Add to cart</div>
            </div>
            <div className='collection-item__footer'>
                <span className='item-name'>{name}</span>
                <span className='item-price'>$ {price}</span>
            </div>
            <hr />
        </div>
    )
};

export default CollectionItem;