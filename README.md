# AppleBasket(基于react-redux 苹果篮子实例总结)

首先要区分 react redux react-redux 这三者之间的关系与联系
1. react：只是负责组件的UI界面渲染
2. redux：相当于一个数据存储中心，主要由store、reducer、action组成
3. react-redux: 连接react和redux，提供两个API--Provider（），connect（）

## 1 react生命周期简介

#### 1.1 组件初始化
1. getDefaultProps()<br/>
设置默认的props，es6中用static dufaultProps={}设置组件的默认属性。整个生命周期只执行一次
2. getInitialState()<br/>
在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props。
3. componentWillMount() ajax数据的拉取操作，定时器的启动。<br/>
组件初始化时调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。
4. render()<br/>
react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了。
5. componentDidMount() 动画的启动，输入框自动聚焦<br/>
组件渲染之后调用，可以通过this.getDOMNode()获取和操作dom节点，只调用一次。

#### 1.2 组件更新
1. componentWillReceivePorps(nextProps)<br/>
组件初始化时不调用，组件接受新的props时调用。不管父组件传递给子组件的props有没有改变，都会触发。
2. shouldComponentUpdate(nextProps, nextState)<br/>
react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候。不过调用this.forceUpdate会跳过此步骤。
3. componentWillUpdate(nextProps, nextState)<br/>
组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
4. render()
5. componentDidUpdate()<br/>
组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。

#### 1.3 组件卸载
componentWillUnmount() 定时器的清除<br/>
组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
