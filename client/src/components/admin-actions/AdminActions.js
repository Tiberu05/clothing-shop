import React from 'react';
import { Link } from 'react-router-dom';

import { AdminAction } from './AdminActions.styles';

const AdminActions = () => {

    return (
        <div>
            <h3>Admin Dashboard</h3>
            <Link to='/admin/collections'>
                <AdminAction>Manage collections</AdminAction>
            </Link>
            
            <Link to='/admin/additem'>
                <AdminAction>Add item</AdminAction>
            </Link>
            
            <Link to='/admin/items'>
                <AdminAction>Items</AdminAction>
            </Link>
        </div>
        
    )
};

export default AdminActions;