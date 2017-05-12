import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import iconAvatar from '../../media/temp/profile.png';

class Avatar extends Component {
    render() {
        const { wrapper, profileStyle, profile } = styles;
        return (
            <View style={wrapper}>
                <View style={profileStyle}>
                    <Image style={profile} source={iconAvatar} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#0eb294',
    },
    profileStyle: {
        alignItems: 'center',
        marginTop: 50
    },
    profile: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 1,
        borderColor: '#fff'
    }
});

export default Avatar;
