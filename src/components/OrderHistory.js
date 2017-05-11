import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class OrderHistory extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'green', padding: 50 }}>
                <Text>OrderHistory</Text>
                <TouchableOpacity onPress={this.goBack.bind(this)}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default OrderHistory;
