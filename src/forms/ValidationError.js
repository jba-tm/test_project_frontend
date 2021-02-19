import React from "react";

export class ValidationError extends React.Component{
    render() {
        if (this.props.errors){
            return this.props.errors.map(err=>(
                <h6 key={err} className="text-danger">
                    {err}
                </h6>
            ))
        }
        return null
    }
}