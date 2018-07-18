# No Match Example
### 本案例主要展示了React Router中Switch的用法。
#### *Switch*：
###### Switch组件接受一个或多个Route作为子组件，当Switch中的多个Route都能匹配某个URL时，只会执行Switch中匹配的路由中的第一个的跳转，例如：
    <Switch>
        <Route path="/" exact component={Home} />
        <Redirect from='/old-match' to='/will-match' />
        <Route path='/will-match' component={WillMatch} />
        <Route component={NoMatch} />
    </Switch>
* 第一个Route：将会精准匹配`/`这个路径，如果路径为`/will-match`或`/old-match`，将不会匹配；
* 第二个Route：匹配`/old-match`，并重定向到`/will-match`；
* 第三个Route：匹配`/will-match`；
* 第四个Route：如果之前的三个Route都没有匹配路径成功，则将跳转这个路由对应的组件；

