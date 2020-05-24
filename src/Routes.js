import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import asyncComponent from './hoc/AsyncComponent';
import Layout from './Layout/Layout';

const asyncHome = asyncComponent(() => {
    return import('./containers/Home/Home');
});

const asyncSignin = asyncComponent(() => {
    return import('./containers/SignIn/SignIn');
});

const asyncMarket = asyncComponent(() => {
    return import('./containers/Market/Market');
});

class Routes extends Component {
    render() {
        let routes = (
            <Switch>
                <Route path="/market" component={asyncMarket} />
                <Route path="/login" component={asyncSignin} />
                <Route path="/" exact component={asyncHome} />
                
            </Switch>
        );
        return (
            <div>
                {
                    <Layout>
                        {routes}
                    </Layout>
                }
            </div>
        );
    }
}

export default withRouter(Routes);
