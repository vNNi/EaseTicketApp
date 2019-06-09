import React, {useEffect, useState} from 'react';
import {css} from 'glamor';
import Colors from '../../Colors';

export default function Category(props) {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

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
         justifyContent: width > 570? 'center' : null,
    });
    const title = css({
        fontFamily: "Montserrat,sans-serif",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "15px",
        lineHeight: "13px",
        color: Colors.greyBold,
        margin:'32px 0 17px 15px',
        textAlign: width > 570? 'center' : null,
      });

      function resize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      }

      useEffect(()=>{
          window.addEventListener('resize',resize);
          return function remove(){
              window.removeEventListener('resize',resize);
          }
      })

    return (
        <section {...wrapper}>
            <h2 {...title}>Categorias</h2>
            <div {...slider}>
                {props.children}
            </div>
        </section>
    )
}
