import React, { Component } from 'react';
import Gallery from './Gallery';
import { connect } from 'react-redux';
import { fetchGallery } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
        gallery: state.gallery
    }
}

const mapDispatchToProps = dispatch => ({
    fetchGallery: () => {dispatch(fetchGallery())}
})


class Main extends Component {

    componentDidMount() {

        this.props.fetchGallery();

        
    }


    render() {
        return(
            <Gallery gallery={this.props.gallery} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);