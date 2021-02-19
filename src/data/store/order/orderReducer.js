import {OrderActionTypes as ActionTypes} from "./types";

const initialState = {
    orders: [],
    loading: false
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ORDERS_LOADING: {
            return {...state, loading: action.payload}
        }
        case ActionTypes.GET_ORDERS: {
            return {...state, orders: action.payload}
        }
        default:
            return state
    }
}
