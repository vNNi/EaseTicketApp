import React from 'react';
import {css} from 'glamor';

import SideMenu from '../../Components/SideMenu';
import Colors from '../../Colors';
import success from '../../Assets/Images/success.svg';

export default function index() {
    const title = css({
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '32px',
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '1em',
    });
    const successImg = css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    });
    return (
        <>
            <div style={{backgroundColor:Colors.yellow}}>
                <SideMenu/>
            </div>
            <section>
                <h1 {...title}>Entrada Liberada !</h1>
                <div {...successImg}>
                    <img src={success} alt="sucesso!" width="300" height="400"/>
                </div>
            </section>
        </>
    )
}
