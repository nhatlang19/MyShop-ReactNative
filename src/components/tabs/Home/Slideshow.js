import React, { Component } from 'react';
import {
    View, StyleSheet, Text,
    Dimensions, Image
} from 'react-native';

import Swiper from 'react-native-swiper';

import fit from '../../../media/temp/fit.jpg';
import little from '../../../media/temp/little.jpg';
import maxi from '../../../media/temp/maxi.jpg';
import midi from '../../../media/temp/midi.jpg';
import mini from '../../../media/temp/mini.jpg';
import party from '../../../media/temp/party.jpg';

const { width } = Dimensions.get('window');

class Slideshow extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            wrapper, imageStyle, titleStyle, categoryText
        } = styles;

        const categories = [
            { url: fit, name: 'Maxi Dress' },
            { url: little, name: 'Maxi Dress' },
            { url: maxi, name: 'Maxi Dress' },
            { url: midi, name: 'Maxi Dress' },
            { url: mini, name: 'Maxi Dress' },
            { url: party, name: 'Maxi Dress' }
        ];
        return (
            <View style={wrapper}>
                <View style={{ justifyContent: 'center', height: 50 }}>
                    <Text style={titleStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ justifyContent: 'flex-end' }}>
                    <Swiper showsPagination width={imageWidth} height={imageHeight}>
                        {
                            categories.map((e) => (
                                <Image style={imageStyle} source={e.url}>
                                    <Text style={categoryText}>{e.name}</Text>
                                </Image>
                            ))
                        }
                    </Swiper>
                </View>
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
        height: imageHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle: {
        paddingVertical: 10,
        color: 'gray',
        fontSize: 20,
        fontFamily: 'Avenir'
    },
    categoryText: {
        color: 'gray',
        fontSize: 16,
        fontFamily: 'Avenir'
    }
});

export default Slideshow;
