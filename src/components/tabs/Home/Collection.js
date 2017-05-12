import React, { Component } from 'react';
import {
    View, StyleSheet, Text,
    Dimensions, Image, TouchableOpacity
} from 'react-native';

import banner from '../../../media/temp/banner.jpg';

const { width, height } = Dimensions.get('window');

class Collection extends Component {
    constructor(props) {
        super(props);
        this.state = { searchBy: '' };
    }

    render() {
        const {
            wrapper, imageStyle, titleStyle
        } = styles;
        return (
            <View style={wrapper}>
                <Text style={titleStyle}>SPRING COLLECTION</Text>
                <Image style={imageStyle} source={banner} />
            </View>
        );
    }
}
const imageWidth = width - 50;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
        padding: 10, 
        paddingTop: 0,
        marginBottom: 10,
        borderRadius: 4
    },
    imageStyle: {
        width: imageWidth,
        height: imageHeight
    },
    titleStyle: {
        paddingVertical: 10,
        color: 'gray',
        fontSize: 20,
        fontFamily: 'Avenir'
    }
});

export default Collection;
