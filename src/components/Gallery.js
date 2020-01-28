import React, { Component } from 'react';
import { Loading } from './LoadingComponent';
import { colNr, imgHeight } from '../shared/imgParams';
import { Fade } from 'reactstrap';
import CarouselAlbum from './CarouselAlbum';
import ImgOrVid from './ImgOrVid';
import { cardBodyStyle, cardHoverBodyStyle, imgStyle } from './styles';
import PropTypes from 'prop-types';

class ImageDiv extends Component {
    constructor(props) {
        super(props);
        this.image = this.props.image;
        this.state = {
            hover: false,
            colNr: 0,
            imgHeight: 0
        }
        this.handleHover = this.handleHover.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);

    }

    updateDimensions() {
        if(window.innerWidth <= 576) {
            this.setState({ colNr: colNr.xs, imgHeight: imgHeight.xs });
        } else if(window.innerWidth > 576 && window.innerWidth <= 768) {
            this.setState({ colNr: colNr.sm, imgHeight: imgHeight.sm });
        } else if(window.innerWidth > 768 && window.innerWidth <= 992) {
            this.setState({ colNr: colNr.md, imgHeight: imgHeight.md });
        } else if(window.innerWidth > 992 && window.innerWidth <= 1200) {
            this.setState({ colNr: colNr.lg, imgHeight: imgHeight.lg });
        } else {
            this.setState({ colNr: colNr.xl, imgHeight: imgHeight.xl });
        }

    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        this.updateDimensions();
    }

    handleHover () {
        this.setState({
            hover: !this.state.hover
          });
      
    }

    render () {
        const imgStyling = {...imgStyle, height: this.state.imgHeight};
        return(
            <Fade in={true} timeout={400} tag="div" className={`col-${this.state.colNr} overflow-hidden`} key={this.image.id}>
                <div className="card p-0 m-2" onMouseEnter={() => this.handleHover()} onMouseLeave={() => this.handleHover()}>
                    {
                        (this.image.media_type === "CAROUSEL_ALBUM")
                        ? <CarouselAlbum carouselAlbum={this.image} imgStyle={imgStyling} />
                        : <ImgOrVid img={this.image} imgStyle={imgStyling} />
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