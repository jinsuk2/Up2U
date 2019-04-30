import React, { Component } from 'react';
import Camera from "./Camera";

export default class CameraContainer extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        const playerList = this.props.navigation.getParam("playerList");
        return (
            <Camera nav={this.props.navigation}
                playerList={playerList}></Camera>
        );
    }
}
