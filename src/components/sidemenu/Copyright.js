import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Copyright extends Component {
    render() {
        const { wrapper, copyright } = styles;
        return (
            <View style={wrapper}>
                <Text style={copyright}>@2017 - Luan Nguyen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute', left: 10, bottom: 10
    },
    copyright: {
        color: '#fff'
    }

});

export default Copyright;
