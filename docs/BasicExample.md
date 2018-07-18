#Basic Example
###本案例主要展示了React Router的基本用法，以及Link、Router、Route的基本概念和用法。
***
####Link：用来实现在React路由中的组件的跳转，在HTML中会被解析为一个a标签，除了a标签本身的属性，可以接受以下属性：
#####*to*: 
######必有参数，类型为string/object, 代表链接地址（相对路径）。例如：
    <Link to='/topics'>Topics</Link>
######字符串类型的值用来表示导航到的路径（Location），可以接受一个包含location的pathname、search、hash等组成的字符串作为参数，例如：
    <Link to='/topics?sort=name'/>
######或者是一个object，例如：
    <Link to={{
        pathname: '/topics',
        search: '?sort=name',
        hash: '#the-hash',
        state: { fromDashboard: true }
    }}/>

#####*replace*: 
######是否替换当前history节点，默认为false：
    <Link to='topics' replace>


#####*innerRef*：
######接受一个function来操纵组件的ref，如果组件尚未插入，ref为null：
    constconst  refCallbackrefCallback  == node  node =>=>  {{
        // `node` refers to the mounted DOM element or null when unmounted// `node` refers  
    }
    <Link to="/" innerRef={refCallback} />


####Router：React路由的外层盒子，里面的内容就是应用内的路由（Route）和路由组件。包括以下几种类型：
* BrowserRouter：使用HTML5的history API实现的路由导航，常用；
* HashRouter：使用URL中的hash来实现的路由导航；
* MemoryRouter：只将URL history保存在内存中的路由导航，适合测试环境或类似React Native这样的非浏览器环境；
* NativeRouter：适合React Native开发iOS或Android app的路由导航；
* StaticRouter：适合location不变场景下的路由导航；

######本案例中使用的是BrowserRouter，Router接受React UI组件或者Route作为子组件：
    <Router>
        //  React UI组件
        <li>
		<Link to='/'>Home</li>
        </li>
	    //  ...其他UI组件
        //  Route组件
	    <Route path='/' component={Home} />
	    //  ...其他Route组件
    </Router>

####Route：路由组件，用来确定Router中路由路径和组件、Link的对应关系，例如：
    <Route exact path="/" component={Home}/>
    //  对应Link
    <Link to='/'>Home</li>
######*path：*
路由对应的路径，必须和Link的to属性匹配；
######*component：*:
路由对应的组件，如果点击Route对应Link，则将跳转到该组件；