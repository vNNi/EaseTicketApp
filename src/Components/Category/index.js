import React from 'react';
import {css} from 'glamor';

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
    return (
        <section {...wrapper}>
            <div {...slider}>
                {props.children}
            </div>
        </section>
    )
}
