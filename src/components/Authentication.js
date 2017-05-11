import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Authentication extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red', padding: 50 }}>
                <Text>Authentication</Text>
                <TouchableOpacity onPress={this.goBack.bind(this)}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Authentication;
