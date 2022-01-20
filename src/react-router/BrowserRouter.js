// 就是个壳，用来创建一个history对象，后面的listen和unlisten都是挂载在history对象上面的
import React from "react";
// import { Router } from "react-router";
import Router from './Router';
// import { createBrowserHistory } from "history";
import createBrowserHistory from "./lib/history";

export default class BrowserRouter extends React.Component {
  constructor() {
    super();
    this.history = createBrowserHistory();
  }

  render() {
    return <Router history={this.history} children={this.props.children} />;
  }
}
