import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Avatar from './sidemenu/Avatar';
import SignIn from './sidemenu/SignIn';

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
        const { wrapper } = styles;

        return (
            <View style={wrapper}>
                <Avatar />
                <SignIn gotoAuthentication={this.gotoAuthentication.bind(this)} />
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

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, 
        backgroundColor: '#0eb294'
    }
});

export default SideMenu;
