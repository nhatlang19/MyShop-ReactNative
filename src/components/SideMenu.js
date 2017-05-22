import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';

import Avatar from './sidemenu/Avatar';
import SignIn from './sidemenu/SignIn';
import Menu from './sidemenu/Menu';
import Copyright from './sidemenu/Copyright';

import TokenStorage from '../storage/token';

class SideMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };
    }

    async componentDidMount() {
        const isLogin = await TokenStorage.isLoggedIn();
        this.setState({ isLoggedIn: isLogin });
    }

    login() {
        this.setState({ isLoggedIn: true });
    }

    async logout() {
        await TokenStorage.logout();
        this.setState({ isLoggedIn: false });
    }

    render() {
        const { wrapper } = styles;

        const signIn = (
            <SignIn
                navigator={this.props.navigator}
                openLoginView={this.login.bind(this)}
            />
        );
        const menu = (
            <Menu
                navigator={this.props.navigator}
                logout={this.logout.bind(this)}
            />
        );

        const showUi = !this.state.isLoggedIn ? signIn : menu;

        return (
            <View style={wrapper}>
                <Avatar />
                {showUi}
                <Copyright />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#0eb294',
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 0 },
        shadowOpacity: 0.2,
        marginRight: 10
    }
});

export default SideMenu;
