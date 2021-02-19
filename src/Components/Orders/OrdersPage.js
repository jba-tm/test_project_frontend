import React from "react";
import {OrderForm} from "./OrderForm";
import {OrderTable} from "./OrderTable";
import {createOrder, getOrders} from "../../data/store";
import {connect} from "react-redux";


const mapStateToProps = state => ({
    orders: state.orderData.orders
})

const mapDispatchToProps = ({
    getOrders, createOrder
})


export const OrdersPage = connect(mapStateToProps, mapDispatchToProps)(
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                status: 0,
                message: ''
            }
        }


        componentDidMount() {
            this.props.getOrders()
            const query = new URLSearchParams(this.props.location.search);
            const msg = query.get('message')
            if (query.hasOwnProperty('message')) {
                alert(msg)
            }
            console.log(query.get('orderStatus'))
        }

        render() {
            return (
                <>
                    <div className="m-2">
                        <OrderForm saveCallback={this.props.createOrder}/>
                    </div>
                    <div className="m-2">
                        <OrderTable orders={this.props.orders}/>
                    </div>
                </>
            );
        }
    }
)