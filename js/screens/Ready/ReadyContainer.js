import React, { Component } from 'react';
import Ready from './Ready';

export default class ReadyContainer extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const players = this.props.navigation.getParam("players");
        return (
            <Ready nav={this.props.navigation}
                players={players}></Ready>
        );
    }
}
