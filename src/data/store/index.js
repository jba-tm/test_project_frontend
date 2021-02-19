import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger"
import {orderReducer} from "./order/orderReducer"

const middlewares = [thunk, logger]

const enhancedReducer = combineReducers(
    {
        orderData: orderReducer,
    }
)

export default createStore(enhancedReducer, applyMiddleware(...middlewares))

export {getOrders, createOrder} from "./order/actions"