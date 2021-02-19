import React from "react"

export class OrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                amount: 0,
                comment: ''
            }
        }

        this.formElements = {
            amount: {label: "Amount", name: "amount", attr: {min: 0, required: true, max: 9999999}},
            comment: {label: "Comment", name: "comment", attr: {required: true}},
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        let formData = JSON.parse(JSON.stringify(this.state.formData))
        formData[e.target.name] = e.target.value
        this.setState({
            formData: formData
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.saveCallback(this.state.formData)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {Object.values(this.formElements).map(elem => (
                        <div className="form-group" key={elem.name}>
                            <label htmlFor={elem.name}>{elem.label}</label>
                            <input type={elem.name === 'amount' ? 'number' : 'text'}
                                   name={elem.name}
                                   id={elem.name}
                                   {...elem.attr}
                                   value={this.state.formData[elem.name]}
                                   onChange={this.handleChange}
                                   className="form-control"/>
                        </div>
                    )
                )}
                <button type="submit" className="btn btn-primary btn-sm m-2">
                    Submit
                </button>
            </form>
        );
    }
}