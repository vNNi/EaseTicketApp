import React , {useState} from 'react';
import {css} from 'glamor';


import Colors from '../../../Colors';

export default function ErrorNotify(props) {

    const [visible, setVisible] = useState(true);

    const bounce = css.keyframes({
        '0%': { transform: 'transfor(0.1)', opacity: 0 },
        '100%': { transform: 'scale(1)' }
    });
    
    const wrapper = css({
        width: '100%',
        height: '40px',
        backgroundColor: Colors.danger,
        lineHeight: '20px',
        position: 'fixed',
        bottom: '0',
        animation: `${bounce} 1.5s ease-out`,
        display: 'flex',
        alignItems: 'center',
        padding: '10px 2px',
    });
    const text = css({
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '14px',
        color: 'white',
        fontWeight: 'bold',
        margin: '1em',
    });
    setInterval(()=>{
        setVisible(false);
    },4000)
    return (
        visible?
        <div {...wrapper}>
            <span {...text}>{props.text}</span>
        </div>:null
    )
}
