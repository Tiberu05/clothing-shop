import React from 'react';

import './CustomButton.scss';


const CustomButton = ({ children, buttonClass, ...otherProps }) => {


    return (
        <button className={`custom-button ${buttonClass}`} {...otherProps} >
            {children}
        </button>
    )
};

export default CustomButton;