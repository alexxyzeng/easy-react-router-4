#Params Example
###本案例主要展示了React Router中参数的用法。
***
####*Route*的path可以接受*path-to-regexp*能够匹配的URL path，可以添加自定义参数，例如：
    <Route path='/:id component={Child}>
######在对应的组件中，可以通过match.params取出参数，例如：
    const Child = ({ match }) => (
        <div>
            <h3>ID: {match.params.id}</h3>
        </div>
    )

######path也可以匹配正则，例如：
    <Route
        path='/order/:direction(asc|desc)'
        component={ComponentWithRegex} 
    />
######在对应的组件中，只有match.params.direction为asc或desc才能匹配这个路由，如下：
    const ComponentWithRegex = ({ match }) => (
        <div>
            <h3>Only asc/desc are allowed: {match.params.direction}</h3>
        </div>
    )



####Route的其他常用属性：
######*match：*
* params：Route的path属性传入的URL中动态传入的键值对；
* isExact：是否精准匹配，为true的话，跳转的地址必须和Route的path完全一致，才能跳转；
* path：Route的path；
* url：Route对应的Link组件的to属性对应的URL
######*location：*
应用当前所在的路由位置
######*history：*
Route对应的history对象，包含了对*browser history*和*hash history*的实现，用来实现获取当前history的相关信息，以及实现诸如*push*、*replace*、*go*、*goBack*、*GoForward*等路由跳转。
######*component：*
当路由匹配时渲染的对应的组件
######*render：*
和component属性类似，接受一个function来动态生成组件
