import {ActionTypes} from '../contants/action-types.js'

const initialState = {
    products:[{
        id: 1,
        title: "Test",
        category: "test2"
    }]
}

export const productReducers = (state, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state

        default:
                return initialState;
    }
}


