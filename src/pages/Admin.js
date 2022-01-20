import React from 'react';
// import { Link } from 'react-router-dom';
import Link from '../react-router/Link';

export default class Admin extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>管理员页面</h1>
        <Link to="/">回首页</Link>
      </React.Fragment>
    );
  }
}
