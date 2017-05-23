import React, { Component } from 'react';
import {
    View, Text,
    ScrollView, Image, TouchableOpacity
} from 'react-native';

import styles from '../../styles/ProductDetailStyle';

import backIcon from '../../media/appIcon/back.png';
import cartIcon from '../../media/appIcon/cartfull.png';

import global from '../../global';

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

        const { product } = this.props;

        let index = 1;
        return (
            <View style={wrapper}>
                <View style={container}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.back.bind(this)}>
                            <Image style={back} source={backIcon} />
                        </TouchableOpacity>
                        <View />
                        <TouchableOpacity onPress={global.addToCart.bind(this, product)}>
                            <Image style={cart} source={cartIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={detailStyle}>
                        <ScrollView horizontal style={imageListStyle}>
                            {
                                
                                product.list_images.map((e) => (
                                    <Image key={index++} style={imageStyle} source={{ uri: e }} />
                                ))
                            }
                        </ScrollView>
                        <View style={titleListStyle}>
                            <Text style={nameStyle}>{product.name}</Text>
                            <Text style={priceStyle}>/ {product.price}$</Text>
                        </View>
                        <ScrollView style={descStyle}>
                            <Text style={descriptionStyle}>
                                {product.description}
                            </Text>
                        </ScrollView>
                        <View style={optStyle}>
                            <Text style={typeStyle}>{product.type}</Text>
                            <View />
                            <Text style={colorStyle}>Color {product.colorName}</Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

// 361 x 452


export default ProductDetail;
