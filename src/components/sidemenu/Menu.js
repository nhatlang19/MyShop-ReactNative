import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Menu extends Component {
    gotoChangeInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'CHANGE_INFO' });
    }

    gotoOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: 'ORDER_HISTORY' });
    }

    render() {
        const {
            wrapper, profileWrapper, profile,
            listMenu, menuItem, menuItemText
        } = styles;
        return (
            <View style={wrapper}>
                <View style={profileWrapper}>
                    <Text style={profile}>CRISTIANO RONALDO</Text>
                </View>
                <View style={listMenu}>
                    <View style={menuItem}>
                        <TouchableOpacity onPress={this.gotoChangeInfo.bind(this)}>
                            <Text style={menuItemText}>Change Info</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={menuItem}>
                        <TouchableOpacity onPress={this.gotoOrderHistory.bind(this)}>
                            <Text style={menuItemText}>Order History</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={menuItem}>
                        <TouchableOpacity onPress={this.props.logout}>
                            <Text style={menuItemText}>Sign out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'space-between',
    },
    profileWrapper: {
        padding: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profile: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#fff'
    },
    listMenu: {
        marginRight: 50
    },
    menuItem: {
        justifyContent: 'center',
        borderColor: '#0a826c',
        borderBottomWidth: 2,
        paddingVertical: 20,
        paddingLeft: 20
    },
    menuItemText: {
        color: '#fff',
        fontFamily: 'Avenir',
        fontSize: 20,
        fontWeight: 'bold'
    }

});

export default Menu;
