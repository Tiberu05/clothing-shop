import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {


    return (
        <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div 
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    position: 'relative',
                    zIndex: -1
                }}
            >
            </div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP HERE</span>
            </div>
        </div>
    )
};

export default withRouter(MenuItem);