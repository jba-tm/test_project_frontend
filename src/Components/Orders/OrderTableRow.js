import React from "react"

export class OrderTableRow extends React.Component{

    render() {
        const order =this.props.order
        return (
            <tr>
                <td>{order.comment}</td>
                <td className="text-right">{Number(order.amount).toFixed(2)} {order.amount_currency}</td>
            </tr>
        );
    }
}