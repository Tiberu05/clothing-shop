import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ItemsCollection, AdminItem, ItemActions, Action, ItemName, ItemPrice } from './AdminCollection.styles';

import { fetchCollectionsStart } from '../../redux/actions/shop';

import { firestore } from '../../firebase/firebase.utils';

const AdminCollection = props => {

    const { collection } = props;

    if (!collection || collection.items.length === 0) return null;

    const deleteItem = async (collectionKey, itemID) => {
        const collectionRef = firestore.doc(`/collections/${collectionKey}`);
    
        const snapshot = await collectionRef.get();
    
        return collectionRef.update({
            items: snapshot.data().items.filter(el => el.id !== itemID)
        })
        .then(() => {
            props.fetchCollectionsStart();
        })
        .catch(err => console.log(err))
    }

    return (
        <ItemsCollection>
            <h3 style={{ marginBottom: '5px'}}>{collection.title}</h3>
            {
                collection.items.map(item => {
                    return <AdminItem key={item.id}>
                                <ItemName>{item.name}</ItemName>
                                <ItemPrice>Price: {item.price} USD</ItemPrice>
                                <ItemActions>
                                    <Link to={`/admin/items/${collection.routeName}/${item.id}`}>
                                        <Action>Edit</Action>
                                    </Link>
                                    {/* <Action onClick={() => updateItem(collection.id, item.id, collection.items)}>Edit</Action> */}
                                    <Action onClick={() => {
                                        deleteItem(collection.id, item.id);
                                        
                                    }}>Delete</Action>
                                </ItemActions>
                            </AdminItem>
                })
            }
        </ItemsCollection>
    )
};

export default connect(null, { fetchCollectionsStart} )(AdminCollection);