import React from 'react';
// import { Link } from 'react-router-dom';
import Link from '../react-router/Link';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>首页</h1>
        <ul>
          <li><Link to="/login">登录</Link></li>
          <li><Link to="/admin">管理员</Link></li>
        </ul>
      </React.Fragment>
    );
  }
}
