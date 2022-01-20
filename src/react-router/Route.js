import React from "react";
import RouterContext from "./lib/RouterContext.js";
import matchPath from "./lib/matchPath.js";

// <Route>的Props：path、component。（<Switch>会传递computedMatch属性）
// <Route>的作用：path和当前的location对比，匹配上了就渲染component。
//              <Switch>会传递computedMatch属性，<Route>里先检测computedMatch属性，如果没有这个再自己去匹配
export default class Route extends React.Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const { location } = context;
          const { computedMatch, component } = this.props; // <Switch>会传递computedMatch属性

          const match = computedMatch ? computedMatch : matchPath(location.pathname, this.props);
          // const match = matchPath(location.pathname, this.props);

          const newProps = { 
            ...context,
            location,
            match
          };

          return (
            <RouterContext.Provider value={newProps}>
              { newProps.match ? React.createElement(component, newProps) : null }
            </RouterContext.Provider>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}
