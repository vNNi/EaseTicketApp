import React, {useState} from 'react'
import { css } from 'glamor';
import {Link} from 'react-router-dom';

import Colors from '../../Colors';
import menuIcon from '../../Assets/Icons/menu.svg';
import closeIcon from '../../Assets/Icons/close.svg';
import Logo from '../../Components/Composites/Logo';

export default function Sidemenu(props) {
    const [clicked, setClicked] = useState(false);
    let iconwrapper = css({
        display: 'flex',
        justifyContent: props.right?'':'space-between',
        padding: '10px',
    });
    let menuWrapper = css({
        display: 'flex',
        justifyContent: props.right?'':'flex-end',
        zIndex: '1000',
        color: 'white',
    });
    let sidemenu = css({
        width: '320px',
        height: '100vh',
        backgroundColor: Colors.yellow,
        transition: 'all 0.5s ease 0s',
        transform: clicked?'translate3d(0,0,0)':'translate3d(100%,0,0)', 
        position : 'fixed',
        zIndex: '1100',
    });
    let linksContent = css({
        margin: '3em 10%',
    });
    let closebtn = css({
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '15px 5%',
    });
    let overlay = css({
        width:'100%',
        height: '100vh',
        zIndex: '900',
        position: 'fixed',
        backgroundColor : 'rgba(0,0,0,0.5)',
    });
    let link = css({
        cursor: 'pointer',
        fontWeight: '600',
        padding: '14px',
        fontFamily: 'Montserrat, san-serif',
        ':hover':{
            color: '#3498db',
        }
    });
    function handleIconClick(){
         setClicked(!clicked);                       
    }
    return (
        <React.Fragment>
            <nav>
                <div {...menuWrapper}>
                {clicked?(<div {...overlay} onClick={handleIconClick}></div>):null}
                    <div {...sidemenu}>
                        <div {...closebtn} onClick={handleIconClick}>
                            <img src={closeIcon} width="26px" height="26px" alt="close icon"/>
                        </div>
                        <ul {...linksContent}>
                            <li {...link}>
                                <Link to="/">Home</Link>
                            </li>
                            <li {...link}>
                                <Link to="/scan">Scan</Link>
                            </li>
                            <li {...link}>
                                <Link to="/">Comprar Ticket</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div {...iconwrapper} >
                <Link to="/">
                    <Logo textShadow={true}/>
                </Link>
                <img onClick={handleIconClick} src={menuIcon} width="32px" height="32px" alt="ease ticket logo"/>
            </div>
        </React.Fragment>
    )
}
