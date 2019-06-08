import React from 'react';
import { css } from 'glamor';
import {Redirect} from 'react-router-dom';

import SideMenu from '../../Components/SideMenu';
import Scanner from '../../Components/Scanner';
import Colors from '../../Colors';
import ErrorNotify from '../../Components/Composites/ErrorNotify';
export default function index(props) {
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
            <div style={{ backgroundColor: Colors.bgBlue }}>
                <SideMenu />
            </div>
            <div>
                <h1 {...title}>Scanner!</h1>
            </div>
            <section {...scanWrapper}>
              <Scanner
                onScan={(data)=>{return (<Redirect to={{
                    pathname: '/success',
                    state: {data:data},
                }}/>)}}
                onError={(err)=>{return (<ErrorNotify text={'Não estamos conseguindo efetuar o pagamento... Desculpe pelo transtorno'}/>)}}
              />
            </section>
        </>
    );
}
