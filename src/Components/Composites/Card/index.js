import React from 'react'
import {css} from 'glamor'
import Colors from '../../../Colors';
import StarRatingComponent from 'react-star-rating-component';

export default function Cards(props) {

let content = css({
    display: 'flex',
    width: '198px',
    backgroundColor: 'pink',
    maxHeight: '90px',
    background: "#FAFAFA",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    flex: '0 0 auto',
    margin: '0 15px',
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
    margin: '20px 10px',
});
const startclick = () => {
}
  return (
      <>
        <div {...content}>
            <img src={props.img?props.img:"https://picsum.photos/64/90"} alt={props.title}/>
            <div {...wrapInfos}>
                <p {...title}>{props.name}</p>
                <p {...subtitle}>{props.description}</p>
                <StarRatingComponent
                onStarClick={startclick.bind(this)}
                value={props.rating}
                editing={false}
                name="counting"
                />
            </div>
        </div>
      </>
  )
}
