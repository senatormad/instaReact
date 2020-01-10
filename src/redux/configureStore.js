import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Gallery } from './gallery';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            gallery: Gallery
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}