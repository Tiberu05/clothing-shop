import React from 'react';

import './ShopPage.scss';

import Collection from '../../components/collections/Collection';
import { SHOP_DATA } from './ShopData';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { collections: SHOP_DATA }
    }


    componentDidMount() {
        console.log(this.state)
    }


    renderCollections() {
        const render = this.state.collections.map(({ id, ...otherCollectionProps }) => {
            return <Collection key={id} {...otherCollectionProps} />
        })

        return render;
    }

    render() {
        return (
            <div className='shop-page'>
                <h1 className='collections-page-title'>Collections </h1>
                {this.renderCollections()}
            </div>
        )
    }
};

export default ShopPage;