import React, { Component } from 'react';
import Name from './Name';

export default class NameContainer extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const players = this.props.navigation.getParam("players");
        return (
            <Name
                players = {players}
                nav = {this.props.navigation}
            />
        );
    }
}
