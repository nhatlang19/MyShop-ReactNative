import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

import ApiRegister from '../../apis/register';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
        };
    }

    callRegister() {
        ApiRegister(this.state, (data) => {
            if (data.status === 1) {
                alert(data.message);
            } else {
                alert(data.message);
                this.props.signIn();
            }
        });
    }

    render() {
        const { wrapper, inputStyle, bigButton, textButton } = styles;

        return (
            <View style={wrapper}>
                <TextInput
                    style={inputStyle}
                    onChangeText={(name) => this.setState({ name })}
                    placeholder='Enter your name'
                />
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
                <TouchableOpacity style={bigButton} onPress={this.callRegister.bind(this)}>
                    <Text style={textButton}>SIGN UP NOW</Text>
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

export default SignUp;
