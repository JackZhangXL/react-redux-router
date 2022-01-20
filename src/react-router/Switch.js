import React from "react";
import RouterContext from "./lib/RouterContext.js";
import matchPath from "./lib/matchPath.js";

// <Switch>的作用：没有<Switch>的话，如果 URL 匹配到了多个<Route>的路由，这几个<Route>都会渲染出来
//                有<Switch>的话，如果 URL 匹配到了多个<Route>的路由，只会渲染第一个匹配的<Route>
// <Switch>的实现：循环children，找出第一个匹配的child，标记为computedMatch，并将其他的child全部变成null
//               （<Route>里先检测computedMatch标记，如果没有这个再使用matchPath自己去匹配）
export default class Switch extends React.Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const { location } = context;
          const { children } = this.props;

          let matchedChild = null; // 两个变量记录第一个匹配上的child和match属性
          let matched = null;

          // 循环children，找出第一个匹配的child，标记为matched，并将其他的child全部变成null
          React.Children.forEach(children, child => {
            if (!matched) {
              matchedChild = child;
              matched = matchPath(location.pathname, { ...child.props });
            }
          });

          // 返回第一个匹配上的child，并标记属性computedMatch。如果一个都没匹配上，返回null
          return matched ? React.cloneElement(matchedChild, { location, computedMatch: matched }) : null;
        }}
      </RouterContext.Consumer>
    );
  }
}
