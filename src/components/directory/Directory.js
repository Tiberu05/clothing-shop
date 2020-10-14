import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/selectors/directorySelector';

import './Directory.scss';

import MenuItem from '../menu-item/MenuItem';

const Directory = ({ sections }) => {
    

    const renderMenuItem = () => {
        const render = sections.map(({ id, ...otherSectionProps }) => {
            return <MenuItem key={id} {...otherSectionProps} />
        })

        return render;
    }

    return (
        <div className='directory-menu'>
            {renderMenuItem()}
        </div>
    )
    
};

const mapStateToProps = state => {
    return {
        sections: selectDirectorySections(state)
    }
}

export default connect(mapStateToProps, {})(Directory);