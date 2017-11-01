import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

export default class Message extends Component {
    constructor() {
        super();
        this.state = {
            msg: '',
        };
    }

    componentDidMount() {
        fetch('../../../api/fetchSampleData.json')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    msg: json.msg.msg,
                });
            });
    }

    render() {
        return (
            <div>
                Hello <b>{this.props.params.id}</b>
                <p>{this.state.msg}</p>
            </div>
        );
    }
}
