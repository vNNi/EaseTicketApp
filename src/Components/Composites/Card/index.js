import React from 'react'
import {css} from 'glamor'
import Colors from '../../../Colors';
import StarRatingComponent from 'react-star-rating-component';

export default function cards(props) {

let content = css({
    display: 'flex',
    width: '198px',
    backgroundColor: 'pink',
    maxHeight: '90px;',
    background: "#FAFAFA",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
});
let title = css({
    fontSize: '10px',
    fontFamily: 'Montserrat',
    fontWeight: '600',
    lineHeight: '12px',
    color: Colors.greyBold,
});
let subtitle = css({
    fontSize: '9px',
    fontFamily: 'Montserrat',
    fontWeight: '600',
    lineHeight: '12px',
    color: Colors.greyLight,
});
let wrapInfos = css({
    margin: '0px 10px',
});
const startclick = () => {
    console.log('121212');
}
  return (
      <>
        <div {...content}>
            <img src="https://picsum.photos/65/90"/>
            <div {...wrapInfos}>
                <p {...title}>The Avengers</p>
                <p {...subtitle}>O filme do ano com 20% OFF. Não perca!</p>
                <StarRatingComponent
                onStarClick={startclick.bind(this)}/>
            </div>
        </div>
      </>
  )
}
