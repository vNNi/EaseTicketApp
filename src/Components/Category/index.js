import React from 'react';
import {css} from 'glamor';
import Colors from '../../Colors';

export default function index(props) {
    const wrapper = css({
        width: '100%',
        height: '100%',
    });
    const slider = css({
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        '&::-webkit-scrollbar': {
            'display': 'none',
          },
    });
    const title = css({
        fontFamily: "Montserrat,sans-serif",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "15px",
        lineHeight: "13px",
        color: Colors.greyBold,
        margin:'32px 0 17px 15px',
      });
    return (
        <section {...wrapper}>
            <h2 {...title}>Categorias</h2>
            <div {...slider}>
                {props.children}
            </div>
        </section>
    )
}
