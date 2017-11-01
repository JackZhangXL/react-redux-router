import React, { Component } from 'react';

export default class Demo extends Component {
    render() {
        return (
            <div>
                <h3>Demo</h3>
                {this.props.children || 'First Demo page'}
            </div>
        );
    }
}
