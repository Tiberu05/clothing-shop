import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import './AdminControl.scss';

const AdminControl = props => {

    const { sectionTitle, where } = props;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='admin-control'>
            <div className='back-button' onClick={() => !where ? props.history.push('/admin') : props.history.push(where)}>
                <ion-icon name="arrow-back-outline"></ion-icon>
                <div>Back</div>
            </div>
            <h3>{sectionTitle}</h3>
        </div>
    )
};

export default withRouter(AdminControl);