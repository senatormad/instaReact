import React, { Component } from 'react';
import { Loading } from './LoadingComponent';
import { colNr } from '../shared/imgParams';
import { Fade } from 'reactstrap';
import CarouselAlbum from './CarouselAlbum';
import ImgOrVid from './ImgOrVid';
import { cardBodyStyle, cardHoverBodyStyle } from './styles';
import PropTypes from 'prop-types';

class ImageDiv extends Component {
    constructor(props) {
        super(props);
        this.image = this.props.image;
        this.state = {
            hover: false
        }
        this.handleHover = this.handleHover.bind(this);

    }

    handleHover () {
        this.setState({
            hover: !this.state.hover
          });
      
    }

    render () {
        return(
            <Fade in={true} timeout={400} tag="div" className={`col-${colNr} overflow-hidden`} key={this.image.id}>
                <div className="card p-0 m-2" onMouseEnter={() => this.handleHover()} onMouseLeave={() => this.handleHover()}>
                    {
                        (this.image.media_type === "CAROUSEL_ALBUM")
                        ? <CarouselAlbum carouselAlbum={this.image} />
                        : <ImgOrVid img={this.image} />
                    }
                    <div className="card-body" style={this.state.hover ? cardHoverBodyStyle : cardBodyStyle}>
                        <p className="card-text">{this.image.caption}</p>
                    </div>
                </div>
            </Fade>
        )
    }
}

const Gallery = (props) => {
    if (props.gallery.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    } else if  (props.gallery.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    } else if (props.gallery.gallery.data) {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mt-3 mb-3">
                        <h1>instaReact</h1>
                        <a href="https://github.com/senatormad/instaReact">@github</a>
                    </div>
                </div>
                <div className="row">
                    {props.gallery.gallery.data.map(image => {
                            return <ImageDiv image={image} key={image.id} />;
                    })}
                </div>
            </div>
        );
    } else {
        return <div></div>
    }
}

ImageDiv.propTypes = {
    image: PropTypes.object
};

Gallery.propTypes = {
    gallery: PropTypes.object
};

export default Gallery;