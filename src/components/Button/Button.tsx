import React, { FunctionComponent } from 'react';
import './Button.scss';

interface ButtonProps {
    label: String
}

export const Button: FunctionComponent<ButtonProps> = props => {
    return (
        <button className='button'>{props.label}</button>
    )
}