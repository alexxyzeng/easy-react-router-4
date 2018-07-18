import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
} from 'react-router-dom';

/*
*   1.Click the public page
*   2.Click the protected page
*   3.Log in
*   4.Click the back button, note the URL each time
*/
const AuthExample = () => (
    <Router>
        <div>
            <AuthButton />
            <ul>
                <li>
                    <Link to='/public'>Public Page</Link>
                </li>
                <li>
                    <Link to='/protected'>Protected Page</Link>
                </li>
            </ul>
            <Route path='/public' component={Public} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/protected' component={Protected} />
        </div>
    </Router>
)

const fakeAuth = {
    isAuthenticated: false,
    authenticate(callback) {
        this.isAuthenticated = true;
        setTimeout(callback, 100);
    },
    signout(callback) {
        this.isAuthenticated = false;
        setTimeout(callback, 100);
    }
}

const AuthButton = withRouter(
    ({ history }) =>
        fakeAuth.isAuthenticated ? (
            <p>
                Welcome！{' '}
                <button onClick={() => {
                    fakeAuth.signout(() => {
                        history.push('/');
                    });
                }}>Sign out</button>
            </p>
        ) : (
                <p>You are not logged in.</p>
            )
)

/**
 *  Route有三种渲染组件的方法：
 *  1.<Route component>  接收一个自定义组件来渲染，这个组件的props中会包括route props;
 *  2.<Route render>    通过一个方法来自定义渲染组件，这个方法传入的参数为route props;
 *  3.<Route children>  
 */
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            fakeAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
                )
        }
    />
)

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

class Login extends React.Component {
    state = {
        redirectToReferrer: false
    }

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: '' } };
        const { redirectToReferrer } = this.state;
        if (redirectToReferrer) {
            return <Redirect to={from} />
        }
        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        )
    }
}

export default AuthExample;