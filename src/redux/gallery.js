import * as ActionTypes from './ActionTypes';

export const Gallery = (state = {
    isLoading: true,
    errMess: null,
    gallery: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_GALLERY:
            return {...state, isLoading: false, errMess: null, gallery: action.payload }
        case ActionTypes.GALLERY_LOADING:
            return {...state, isLoading: true, errMess: null, gallery: []}
        case ActionTypes.GALLERY_FAILED:
            return {...state, isLoading: false, errMess: action.payload, gallery: []}
        default:
            return state;
    }
}