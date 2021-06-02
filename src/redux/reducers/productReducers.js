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
                return initialState;
    }
}
let state = {}
export const selectedProductReducers = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
        return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {};
      default:
        return state;
    }
  };
