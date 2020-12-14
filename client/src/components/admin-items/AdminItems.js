import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import AdminCollection from '../admin-collection/AdminCollection';
import AdminControl from '../admin-control/AdminControl';

import { fetchCollectionsStart } from '../../redux/actions/shop';

import { selectCollections } from '../../redux/selectors/shopSelector';

const AdminItems = props => {

    const { collections } = props;

    console.log(props);

    useEffect(() => {
        props.fetchCollectionsStart();
    }, [props.fetchCollectionsStart])

    if (collections.length === 0) return null;

    return (
        <div className='admin-items'>

            <AdminControl sectionTitle='Items' />

            {

            collections.map(collection => {
                return <AdminCollection key={collection.id} collection={collection} />
            })  
                
                    
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        collections: Object.values(selectCollections(state))
    }
};

export default connect(mapStateToProps, { fetchCollectionsStart })(AdminItems);