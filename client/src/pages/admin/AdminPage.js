import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';

import './AdminPage.scss';

import AdminActions from '../../components/admin-actions/AdminActions';
import AdminManageCollections from '../../components/admin-manage-collections/AdminManageCollections';
import AdminItems from '../../components/admin-items/AdminItems';
import AdminItemAdd from '../../components/admin-item-add/AdminItemAdd';
import AdminItemEdit from '../../components/admin-item-edit/AdminItemEdit';

import { fetchCollectionsStart } from '../../redux/actions/shop';

import { selectCollections } from '../../redux/selectors/shopSelector';


const AdminPage = (props) => {

    useEffect(() => {

        props.fetchCollectionsStart();

    }, [props.fetchCollectionsStart])

    const { match } = props;

    return (
        <div className='admin-page'>

            <Route exact path={`${match.path}`} component={AdminActions} />
            <Route exact path={`${match.path}/collections`} component={AdminManageCollections} />
            <Route exact path={`${match.path}/additem`} component={AdminItemAdd} />         
            <Route exact path={`${match.path}/items`} component={AdminItems} />
            <Route exact path={`${match.path}/items/:collection/:item`} component={AdminItemEdit} />
            
            
        </div>
    )
};

const mapStateToProps = state => {
    return {
        collections: selectCollections(state)
    }
}

export default withRouter(connect(mapStateToProps, { fetchCollectionsStart })(AdminPage));