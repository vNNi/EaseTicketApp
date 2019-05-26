import React from "react";
import { css } from "glamor";

export default function index(props) {
  const url = "https://picsum.photos/id/827/1280/1200?blur=10";
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
