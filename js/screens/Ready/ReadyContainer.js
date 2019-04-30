import React, { Component } from 'react';
import Ready from './Ready';

export default class ReadyContainer extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const photos = this.props.navigation.getParam("photos");
        const playerList = this.props.navigation.getParam("playerList");
        return (
            <Ready nav={this.props.navigation}
                photos={photos}
                playerList={playerList}></Ready>
        );
    }
}
