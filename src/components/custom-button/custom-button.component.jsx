import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({children, isGoogle, inverted, ...otherProps}) => (
    <button className={`${isGoogle ? 'google-sign-in' : ''}  ${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;