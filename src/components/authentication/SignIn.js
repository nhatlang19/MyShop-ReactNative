import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    login() {
        this.setState({ isLoggedIn: true });
    }

    logout() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const { wrapper, inputStyle, bigButton, textButton } = styles;

        return (
            <View style={wrapper}>
                <TextInput
                    style={inputStyle}
                    placeholder='Enter your email'
                />
                <TextInput
                    style={inputStyle}
                    placeholder='Enter your password'
                />
                <TouchableOpacity style={bigButton}>
                    <Text style={textButton}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    inputStyle: {
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 45,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingLeft: 10
    },
    bigButton: {
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 20,
        margin: 10
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    }
});

export default SignIn;
