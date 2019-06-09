import React from 'react';
import {css} from 'glamor';

export default function index(props) {
    const title = css({
        fontFamily: 'Montserrat, sans-serif',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '12px',
        color: props.color? props.color : 'white',
        textShadow: props.textShadow ? ' 0px 4px 4px rgba(0, 0, 0, 0.25)' : null, 
    });
    return (
        <div>
            <h1 {...title}>EASE<br/>TICKET</h1>
        </div>
    )
}
