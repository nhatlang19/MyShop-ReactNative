import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Main extends Component {
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
            <View style={{ flex: 1, padding: 50, backgroundColor: 'blue' }}>
                <Text>Main</Text>
                <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
                    <Text>Open Authentication</Text>
                </TouchableOpacity>
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

export default Main;
