import {css} from 'glamor'

const style = (props) => {
    console.log(props);
   return {
    circle: circle,
    imgCss: imgCss,
    content: content,
    wrap: wrap(props),
   }
};
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
let wrap = (props) => css({
    maxWidth: '15%',
    // margin: props.margin? props.margin : '0px 10px',
});

export default style