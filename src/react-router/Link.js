import React from "react";
import RouterContext from "./lib/RouterContext";

export default class Link extends React.Component {
  handleClick = (history) => {
    return (e) => {
      e.preventDefault();
      const { to } = this.props;
      history.push(to);
    }
  }

  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const { history } = context; // 从RouterContext获取history对象
          const { to, children } = this.props;

          return (
            <a href={to} onClick={this.handleClick(history)}>
                {children}
            </a>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}
