import React, { Component } from 'react';
import Home from './Home';

export default class HomeContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = true;
    }

    render() {
        return (
            <Home></Home>
        );
    }
}
