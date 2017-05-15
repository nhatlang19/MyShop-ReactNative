import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet,
    Image, Dimensions
} from 'react-native';

import SignIn from './authentication/SignIn';
import SignUp from './authentication/SignUp';

import backImg from '../media/appIcon/back_white.png';
import icLogo from '../media/appIcon/ic_logo.png';

const { height } = Dimensions.get('window');

class Authentication extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clickedSignIn: true
        };
    }

    signIn() {
        this.setState({ clickedSignIn: true });
    }

    signUp() {
        this.setState({ clickedSignIn: false });
    }

    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        const { wrapper, header, imageHeader, titleHeader,
            tabAuthen, textSignIn, textSignUp, tabItem } = styles;
        const showUi = this.state.clickedSignIn ? <SignIn /> : <SignUp />;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <TouchableOpacity onPress={this.goBack.bind(this)}>
                        <Image source={backImg} style={imageHeader} />
                    </TouchableOpacity>
                    <Text style={titleHeader}>Wearing a dress</Text>
                    <Image source={icLogo} style={imageHeader} />
                </View>
                {showUi}
                <View style={tabAuthen}>
                    <TouchableOpacity style={textSignIn} onPress={this.signIn.bind(this)}>
                        <Text style={tabItem}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={textSignUp} onPress={this.signUp.bind(this)}>
                        <Text style={tabItem}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#0eb294',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageHeader: {
        width: 30,
        height: 30
    },
    titleHeader: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Avenir'
    },
    tabAuthen: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSignIn: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1
    },
    textSignUp: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1
    },
    tabItem: {
        color: '#0eb294'
    }
});


export default Authentication;
