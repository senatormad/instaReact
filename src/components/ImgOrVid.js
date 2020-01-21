import React from 'react';
import { imgStyle } from './styles';
import PropTypes from 'prop-types';

const ImgOrVid = props => {
    return (
        (props.img.media_type === "IMAGE")
            ? <img src={props.img.media_url} className="card-img-top" alt={props.img.id} style={imgStyle}/>
            : (props.img.media_type === "VIDEO")
                ? <video style={imgStyle} className="card-img-top" src={props.img.media_url} autoPlay muted loop />
                : <div></div>
    )
}

ImgOrVid.propTypes = {
    img: PropTypes.object
};

export default ImgOrVid;