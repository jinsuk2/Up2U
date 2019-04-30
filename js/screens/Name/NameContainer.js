import React, { Component } from 'react';
import Name from './Name';

export default class NameContainer extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Name
                nav = {this.props.navigation}
            />
        );
    }
}
