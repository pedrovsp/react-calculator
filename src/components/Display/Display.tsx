import React, { FunctionComponent } from 'react';
import './Display.scss';

export interface DisplayProps {
    value: string
}

export const Display: FunctionComponent<DisplayProps> = (props) => {

    return (
        <div className="display">{props.value}</div>
    );
}