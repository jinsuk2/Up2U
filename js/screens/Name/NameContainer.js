import React, { Component } from 'react';
import Name from './Name';

export default class HomeContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = true;
    }

    render() {
        return (
            <Name></Name>
        );
    }
}
