import {OrderDataTypes} from "./store/order/types";

const protocol = process.env.REACT_APP_SERVER_PROTOCOL
const hostname = process.env.REACT_APP_SERVER_HOST_NAME
const port = process.env.REACT_APP_SERVER_PORT

export const RestUrls = {
    [OrderDataTypes.ORDERS]: `${protocol}://${hostname}:${port}/api/orders/`,
}
