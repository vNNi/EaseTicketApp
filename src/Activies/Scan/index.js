import React from 'react';
import { css } from 'glamor';
import { Mutation } from 'react-apollo';

import SideMenu from '../../Components/SideMenu';
import Scanner from '../../Components/Scanner';
import Colors from '../../Colors';
import { VERIFY_TOKEN } from '../../Services/GraphQl/mutations';

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
                <Mutation mutation={VERIFY_TOKEN}>
                    {(verifyToken, { data, loading, error }) => {
                        return (<Scanner
                            onScan={(token) => {
                                console.log(token)
                                if (token) {
                                    console.log(token);
                                    if (error) {
                                        console.log('error',error);
                                        return props.location.push('/buy', { reject: true });
                                    }
                                    verifyToken({ variables: { token: token } });
                                    if(data){
                                        console.log('data',data);
                                    }
                                }
                            }}
                        />)
                    }}
                </Mutation>
            </section>
        </>
    );
}
