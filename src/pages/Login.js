import React from 'react';
// import { Link } from 'react-router-dom';
import Link from '../react-router/Link';

export default class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>登录页</h1>
        <Link to="/">回首页</Link>
      </React.Fragment>
    );
  }
}
