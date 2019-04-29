import React, { Component } from 'react';
import Camera from "./Camera";

export default class CameraContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = true;
    }

    render() {
        return (
            <Camera></Camera>
        );
    }
}
