import React from "react";
import { css } from "glamor";

export default function index(props) {
  const url = "https://pixabay.com/get/52e3dd404351b108feda8460825668204022dfe055517048752a72d2/urban-438393_1920.jpg";
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
