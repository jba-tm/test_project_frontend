import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect}
    from "react-router-dom";
import {OrdersPage} from "./Orders/OrdersPage";

export class Selector extends Component {
    render() {
        // const routes = React.Children.map(this.props.children, child => ({
        //     component: child,
        //     name: child.props.name,
        //     url: `/${child.props.name.toLowerCase()}`,
        //     datatype: child.props.datatype
        // }));
        return <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Switch>
                            {/*<Route path="/isolated" component={ IsolatedTable } />*/}
                            <Route path="/" component={OrdersPage}
                                   exact={true}/>

                            <Redirect to="/"/>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    }
}