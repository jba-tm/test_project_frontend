import {OrderActionTypes as ActionTypes, OrderDataTypes as DataTypes} from "./types";
import axios from "axios";
import {RestUrls} from "../../urls";

export const getOrders = () => {
    return dispatch => {
        dispatch({
            type: ActionTypes.ORDERS_LOADING, payload: true
        })
        axios.get(RestUrls[DataTypes.ORDERS])
            .then(response => {
                dispatch({type: ActionTypes.GET_ORDERS, payload: response.data})
            })
            .catch(err => {
                    console.log(err)
                    dispatch({type: ActionTypes.ORDERS_LOADING, payload: false})
                }
            )
    }
}

export const createOrder = (data, callback=()=>{}) => {
    return dispatch => {
        axios.post(RestUrls[DataTypes.ORDERS], data)
            .then(response => {
                console.log(response.data)
                const data = response.data
                if(data['errorCode']===0){
                    window.location.replace(data['formUrl'])
                }
                // dispatch({type: ActionTypes.CREATE_ORDER, payload: response.data})
            })
            .catch(err => {
                console.log(err)
                dispatch({type: ActionTypes.ORDERS_LOADING, payload: false})
            })
    }
}
