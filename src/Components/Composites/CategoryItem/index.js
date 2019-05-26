import React from 'react'
import style from './style'
import {css} from 'glamor'

export default function categoryItem(props) {
    let img = true;
    let circle = css({
        width: "100px",
        height: "100px",
        backgroundColor:'grey',
        borderRadius: '50%',
    });
    let imgCss = css({
        width: "100px",
        height: "100px",
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
        maxWidth: '15%',
        margin: props.margin? props.margin : '0px 10px',
        padding: '0 12px',
    });
  return (
    <>
        <div {...wrap}>
            <div {...content}>
                <div>
                    {img?
                    <img {...imgCss} src="https://picsum.photos/100"/>:
                    (<div {...circle}>

                    </div>)
                    }
                </div>
                <p>asdasd</p>
            </div>
        </div>
    </>
  )
}
