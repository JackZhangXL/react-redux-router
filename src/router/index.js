import React, { Component } from 'react';

export default class Index extends Component {
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || 'Welcome to your Inbox'}
            </div>
        );
    }
}
