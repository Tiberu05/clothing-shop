import React from 'react';

import './FormInput.scss';

const FormInput = ({ type, value, required, onChange, label }) => {



    return (
        <div className='group'>
            
            <input 
                className='form-input'
                type={type} 
                value={value} 
                required={required} 
                onChange={onChange} 
            />
            {
                label ?   
                (<label className={`${value.length > 0 ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>)
                : null
            }
        </div>
        
    )
};

export default FormInput;