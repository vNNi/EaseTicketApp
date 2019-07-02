import React from "react";
import { css } from "glamor";

export default function index(props) {
  const url = "https://cdn.pixabay.com/photo/2014/09/07/21/52/urban-438393_960_720.jpg";
  let img = css({
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '40vh',
  });
  let wrapper = css({
    width: '100%',
    height: '100%',
  });
  return (
    <section {...wrapper}>
      <div {...img}>
        {props.children}
      </div>
    </section>
  );
}
