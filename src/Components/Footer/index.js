import React from 'react';
import {css} from 'glamor';

import Logo from '../Composites/Logo';
import Color from '../../Colors';
import {Link} from 'react-router-dom';
import face from '../../Assets/Icons/facebook.svg';
import twitter from '../../Assets/Icons/twitter.svg';
import insta from '../../Assets/Icons/instagram.svg';

export default function index() {
    const content = css({
        paddingTop: '1.5em',
        margin: '2em 15%',
        paddingBottom: '1em',
    });
    const header = css({
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    });
    const subtitle = css({
        color: 'black',
        fontSize: '12px',
        fontFamily: 'Roboto, sans-serif',
        margin: '5px 0 0 0',
    });
    const menu = css({
        display: 'flex',
        justifyContent: 'center',
        margin: '1em 0 10px 0',
        fontFamily: 'Montserrat, sans-serif',
    });
    const menuItems = css({
        padding: '0 10px',
    });
    const link = css({
        color: Color.yellow
    });
    const socials = css({
        display: 'flex',
        justifyContent: 'center',
        margin: '2em 0 2em 0',
    });
    const socialsItems = css({
        padding: '0 5px',
    });
    const contactText = css({
        textAlign: 'center',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '12px',
        color: 'grey',
    });
    return (
        <footer {...content}>
            <div {...header}>
                <Logo color={Color.yellow} textShadow={false}/>
                <p {...subtitle}>O futuro, hoje!</p>
            </div>
            <div>
                <ul {...menu}>
                    <li className={`${menuItems} ${link}`}>
                        <Link to="/" style={{color:Color.yellow}}>Home</Link>
                    </li>
                    <li {...menuItems}>
                        <Link to="/scan" style={{color:'black'}}>Scan</Link>
                    </li>
                    <li {...menuItems}>
                    <Link to="/scan" style={{color:'black'}}>Comprar</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul {...socials}>
                    <li {...socialsItems}>
                        <img src={face} width={32} height={32} alt="facebook"/>
                    </li>
                    <li {...socialsItems}>
                        <img src={twitter} width={32} height={32} alt="facebook"/>
                    </li>
                    <li {...socialsItems}>
                        <img src={insta} width={32} height={32} alt="facebook"/>
                    </li>
                </ul>
            </div>
            <div>
                <address>
                    <p {...contactText}>Contate EaseTicket, Avenida Paulista - 250, Prédio Paulista - 11o Andar - No 11 - São Paulo</p>
                </address>
                    <br/>
                <p {...contactText}>Ligue para nós agora: (11) 23334-56678 Email: contact@easeticket.com</p>
            </div>
        </footer>
    )
}
