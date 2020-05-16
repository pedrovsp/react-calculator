import React, { FunctionComponent } from 'react';
import './Button.scss';

interface ButtonProps {
    operator?: boolean;
    double?: boolean;
    triple?: boolean;
    label: String;
    click: Function;
}

export const Button: FunctionComponent<ButtonProps> = props => {
    return (
        <button
            className={`
            button
            ${props.operator ? 'operator' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
        `}
            onClick={() => props.click(props.label)}
        >
            {props.label}
        </button>
    )
}