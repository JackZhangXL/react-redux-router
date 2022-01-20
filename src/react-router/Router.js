import React from "react";
import RouterContext from "./lib/RouterContext.js";

// Router的Props：<BrowserRouter>传递来的history
// Router作用：将history、location、match存入React.context中。
//            监听路由的变化，变化的时候，改变state上的location，触发children渲染。
export default class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.history.location
    };

    // 下面两个变量是防御性代码，防止根组件还没渲染location就变了
    // 如果location变化时，当前根组件还没渲染出来，就先记下他，等当前组件mount了再设置到state上
    this._isMounted = false;
    this._savedLocation = null;

    // 通过history监听路由变化，变化的时候，改变state上的location
    this.unlisten = props.history.listen(location => {
      if (this._isMounted) {
        this.setState({ location });
      } else {
        this._savedLocation = location;
      }
    });
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._savedLocation) {
      this.setState({ location: this._savedLocation });
    }
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
      this._isMounted = false;
      this._savedLocation = null;
    }
  }

  render() {
    const { history, children } = this.props;
    const { location } = this.state;

    // RouterContext是路由的相关属性，包括history和location等
    return (
      <RouterContext.Provider
        value={{
          history,
          location,
          match: { 
            path: "/", 
            url: "/", 
            params: {}, 
            isExact: false
          },
        }}
      >
        {children}
      </RouterContext.Provider>
    );
  }
}
