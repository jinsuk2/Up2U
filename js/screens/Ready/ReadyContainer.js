import React, { Component } from 'react';
import Ready from './Ready';

export default class ReadyContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = true;
    }

    render() {
        return (
            <Ready></Ready>
        );
    }
}
