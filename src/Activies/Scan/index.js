import React from 'react';
import {css} from 'glamor';

import SideMenu from '../../Components/SideMenu';
import Scanner from '../../Components/Scanner';
import Colors from '../../Colors';

export default function index() {
    const title = css({
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '32px',
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '1em',
    });
    const scanWrapper = css({
        margin: '0 10%',
    });
    return (
        <>
            <div style={{backgroundColor:Colors.bgBlue}}>
                <SideMenu/>
            </div>
            <div>
                <h1 {...title}>Scanner!</h1>
            </div>
            <section {...scanWrapper}>
                <Scanner/>
            </section>
        </>
    );
}
