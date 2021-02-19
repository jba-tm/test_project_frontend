import React from "react"
import {Provider as ReduxProvider} from "react-redux"
import dataStore from './data/store'
import {Selector} from "./Components/Selector";
import {OrdersPage} from "./Components/Orders/OrdersPage";


export default class App extends React.Component {
    render() {
        return (
            <ReduxProvider store={dataStore}>
                <Selector>
                    <OrdersPage/>
                </Selector>
            </ReduxProvider>
        );
    }
}