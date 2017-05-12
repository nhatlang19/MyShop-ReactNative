import React, { Component } from 'react';
import { 
    View, StyleSheet, Text, 
    Dimensions, Image, TextInput, TouchableOpacity
} from 'react-native';

import icLogo from '../../media/appIcon/ic_logo.png';
import icMenu from '../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { searchBy: '' };
    }

    render() {
        const { 
            wrapper, header, imageHeader, 
            titleHeader, txtSearch
        } = styles;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <TouchableOpacity onPress={this.props.openMenu}>
                    <Image source={icMenu} style={imageHeader} />
                    </TouchableOpacity>
                    <Text style={titleHeader}>Wearing a dress</Text>
                    <Image source={icLogo} style={imageHeader} />
                </View>
                
                <TextInput
                    placeholder='What do you want to buy?'
                    style={txtSearch}
                    onChangeText={(searchBy) => this.setState({ searchBy })}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 7,
        backgroundColor: '#0eb294',
        paddingHorizontal: 20
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
    txtSearch: {
        marginTop: 7,
        backgroundColor: '#fff', 
        height: 30,
        paddingLeft: 10
    }
});

export default Header;
