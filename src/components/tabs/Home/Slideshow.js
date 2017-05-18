import React, { Component } from 'react';
import {
    View, StyleSheet, Text,
    Dimensions, Image, TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';

import ApiGetCategories from '../../../apis/categories';

const { width } = Dimensions.get('window');

class Slideshow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loadedCat: false,
            categories: []
        };
    }

    componentDidMount() {
        ApiGetCategories((res) => {
            this.setState({ loadedCat: true });
            this.setState({ categories: res });
        });
    }

    gotoCategoriesList(category) {
        const { navigator } = this.props;
        navigator.push({ name: 'CATEGORIES_LIST', category });
    }

    render() {
        const {
            wrapper, imageStyle, titleStyle, categoryText
        } = styles;
        let swiper;
        if (this.state.loadedCat) {
            swiper = (
                <Swiper showsPagination width={imageWidth} height={imageHeight}>
                    {
                        this.state.categories.map((e) => (
                            <TouchableOpacity
                                key={e.id}
                                ref={e}
                                onPress={this.gotoCategoriesList.bind(this, e)}
                            >
                                <Image style={imageStyle} source={{ uri: e.images }}>
                                    <Text style={categoryText}>{e.name}</Text>
                                </Image>
                            </TouchableOpacity>
                        ))
                    }
                </Swiper>
            );
        }
        return (
            <View style={wrapper} >
                <View style={{ justifyContent: 'center', height: 50 }}>
                    <Text style={titleStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ justifyContent: 'flex-end' }}>
                    {swiper}
                </View>
            </View >
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
