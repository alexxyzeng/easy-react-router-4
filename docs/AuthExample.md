#Auth Example
###本案例主要展示了React Router中Redirect的用法。

####*Redirect*：类似于Route组件，通过接受一个path参数，来实现点击Link来跳转到其他Route对应的组件，例如：
    <Route path='/login' component={Login} />
    <PrivateRoute path='/protected' component={Protected} />
######如果访问`/protected`页面，则会根据当前是否验证通过来跳转的组件。如果未验证通过，则将跳转到登陆页面，如下：
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
######如果fakeAuth.isAuthenticated为false，则将跳转`/login`页面



