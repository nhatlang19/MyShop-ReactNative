import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class SideMenu extends Component {
    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    }
    
    gotoChangeInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'CHANGE_INFO' });
    }

    gotoOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: 'ORDER_HISTORY' });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'gray', padding: 50 }}>
                <Text>Side menu</Text>

                <TouchableOpacity onPress={this.gotoChangeInfo.bind(this)}>
                    <Text>Open Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gotoOrderHistory.bind(this)}>
                    <Text>Open Order History</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SideMenu;
