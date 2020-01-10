import * as ActionTypes from './ActionTypes';
import { urlParams } from '../shared/urlParams'


export const fetchGallery= () => (dispatch) => {
    dispatch(galleryLoading(true));
    return fetch(`${urlParams.url}?fields=${urlParams.fields}&access_token=${urlParams.access_token}`)
    .then(response => {
        if(response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText)
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(gallery => dispatch(addGallery(gallery)))
    .catch(error => dispatch(galleryFailed(error.message)));


};

export const galleryLoading = () => ({
    type: ActionTypes.GALLERY_LOADING
});

export const galleryFailed = (errmess) => ({
    type: ActionTypes.GALLERY_FAILED,
    payload: errmess

});

export const addGallery = (gallery) => ({
    type: ActionTypes.ADD_GALLERY,
    payload: gallery
});