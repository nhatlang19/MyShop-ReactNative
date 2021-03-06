import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

import ApiLogin from '../../apis/login';
import TokenStorage from '../../storage/token';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    async login() {
        ApiLogin(this.state, async(data) => {
            if (data.status === 1) {
                alert(data.message);
            } else { 
                await TokenStorage.saveToken(data.token);
                this.props.openLoginView();
                this.props.goBack();
            }
        });
    }

    render() {
        const { wrapper, inputStyle, bigButton, textButton } = styles;

        return (
            <View style={wrapper}>
                <TextInput
                    style={inputStyle}
                    onChangeText={(email) => this.setState({ email })}
                    placeholder='Enter your email'
                />
                <TextInput
                    style={inputStyle}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder='Enter your password'
                    secureTextEntry
                />
                <TouchableOpacity 
                style={bigButton}
                onPress={this.login.bind(this)}
                >
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
