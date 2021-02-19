import React from "react";
import {OrderTableRow} from "./OrderTableRow";


export class OrderTable extends React.Component {
    render() {
        return (
            <table className="table table-sm table-striped table-bordered">
                <thead>
                <tr>
                    <th colSpan="2"
                        className="bg-primary text-white text-center h4 p-2">
                        Orders
                    </th>
                </tr>
                <tr>
                    <th>Amount</th>
                    <th>Comment</th>
                </tr>
                </thead>
                <tbody>
                {this.props.orders.map(order => <OrderTableRow
                    key={order.id}
                    order={order}/>)}
                </tbody>
            </table>
        );
    }
}
