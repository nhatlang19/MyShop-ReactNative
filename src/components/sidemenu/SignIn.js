import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class SignIn extends Component {
    render() {
        const { wrapper, txtSignIn } = styles;
        return (
            <View style={wrapper}>
                <TouchableOpacity onPress={this.props.gotoAuthentication}>
                    <Text style={txtSignIn}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        marginVertical: 30,
        marginHorizontal: 30,
        padding: 18,
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 10
    },
    txtSignIn: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: 'gray'
    }
   
});

export default SignIn;
