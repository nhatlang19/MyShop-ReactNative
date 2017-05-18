import React, { Component } from 'react';
import {
    View, Text,
    ScrollView, Image, TouchableOpacity
} from 'react-native';

import styles from '../../styles/ProductDetailStyle';

import backIcon from '../../media/appIcon/back.png';
import cartIcon from '../../media/appIcon/cartfull.png';

import sp1 from '../../media/temp/sp1.jpeg';
import sp2 from '../../media/temp/sp2.jpeg';

class ProductDetail extends Component {
    back() {
        this.props.navigator.pop();
    }

    render() {
        const {
            wrapper, container, header,
            back, cart, detailStyle,
            imageListStyle, imageStyle, titleListStyle,
            nameStyle, priceStyle, descStyle, descriptionStyle,
            optStyle, typeStyle, colorStyle
        } = styles;
        return (
            <View style={wrapper}>
                <View style={container}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.back.bind(this)}>
                            <Image style={back} source={backIcon} />
                        </TouchableOpacity>
                        <View />
                        <TouchableOpacity onPress={this.back.bind(this)}>
                            <Image style={cart} source={cartIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={detailStyle}>
                        <View style={imageListStyle}>
                            <Image style={imageStyle} source={sp1} />
                            <Image style={imageStyle} source={sp2} />
                        </View>
                        <View style={titleListStyle}>
                            <Text style={nameStyle}>BLACK OFF THE</Text>
                            <Text style={priceStyle}>/ 124$</Text>
                        </View>
                        <ScrollView style={descStyle}>
                            <Text style={descriptionStyle}>
                                Adding alignItems to a component's style determines the alignment of children along the secondary axis (if the primary axis is row, then the secondary is column, and vice versa). Should children be aligned at the start, the center, the end, or stretched to fill? Available options are flex-start, center, flex-end, and stretch.
                                Going Deeper
We've covered the basics, but there are many other styles you may need for layouts. The full list of props that control layout is documented here.
We're getting close to being able to build a real application. One thing we are still missing is a way to take user input, so let's move on to learn how to handle text input with the TextInput component.
                            </Text>
                        </ScrollView>
                        <View style={optStyle}>
                            <Text style={typeStyle}>Material leather </Text>
                            <View />
                            <Text style={colorStyle}>Color Khaki </Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

// 361 x 452


export default ProductDetail;
