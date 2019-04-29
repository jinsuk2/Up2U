import React, { Component } from 'react';
import Start from './Start';

export default class StartContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = true;
    }

    render() {
        return (
            <Start></Start>
        );
    }
}
