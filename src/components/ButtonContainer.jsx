import React from 'react';
import './ButtonContainer.css';

export default function ButtonContainer(props) {
    return (
        <div className="button-container">{props.children}</div>
    )
}