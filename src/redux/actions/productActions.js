import {ActionTypes} from '../contants/action-types.js'

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products,
    };
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}