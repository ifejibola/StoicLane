import { combineReducers } from 'redux';
import artReducer from './artReducer';

export default combineReducers({
    art: artReducer
});