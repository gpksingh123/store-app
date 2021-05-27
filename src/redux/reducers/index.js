import {combineReducers} from 'redux';
import {productReducers} from './productReducers.js';

const reducers = combineReducers({
    allProducts: productReducers
})

export default reducers;