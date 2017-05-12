import React, { Component } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

import Drawer from 'react-native-drawer';

import SideMenu from './SideMenu';
import Shop from './Shop';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // componentDidMount() {
    //     this.drawer.open();
    // }

    closeControlPanel = () => {
        this.drawer.close();
    };
    openControlPanel = () => {
        this.drawer.open();
    };

    render() {
        return (
            <Drawer
                type="overlay"
                tapToClose
                openDrawerOffset={0.2} // 20% gap on the right side of drawer
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                ref={(ref) => (this.drawer = ref)}
                content={<SideMenu navigator={this.props.navigator} />}
            >
                <Shop open={this.openControlPanel.bind(this)} navigator={this.props.navigator} />
            </Drawer>
        );
    }
}

export default Main;
