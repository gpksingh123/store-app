import {ActionTypes} from '../contants/action-types.js'

const initialState = {
    products: [],
}

export const productReducers = (state, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            //return exisitng state with products and exisiting payload
            return {...state, products:payload}

        default:
                return initialState.products;
    }
}


