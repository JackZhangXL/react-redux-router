import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/demo">Demo</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}
