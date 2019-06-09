import React from 'react'
import {css} from 'glamor';

export default function categoryItem(props) {
    let circle = css({
        width: "80px",
        height: "80px",
        backgroundColor:'grey',
        borderRadius: '50%',
    });
    let imgCss = css({
        width: "80px",
        height: "80px",
        borderRadius: '50%',
        backgroundRepeat: 'no-repeat',
    });
    let content = css({
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    });
    let wrap = css({
        flex: '0 0 auto',
        margin: props.margin? props.margin : '0px 15px',
    });
    let title = css({
        fontFamily: 'Montserrat, sans-serif',
        marginTop: '10px',
        fontSize: '14px',
    });
  return (
    <>
        <div {...wrap}>
            <div {...content}>
                <div>
                    {props.img?
                    <img {...imgCss} src={props.img} alt={props.name}/>:
                    (<div {...circle}>

                    </div>)
                    }
                </div>
                <p {...title}>{props.name}</p>
            </div>
        </div>
    </>
  )
}
