import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    Image, TouchableOpacity
} from 'react-native';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    gotoProductDetail(product) {
        this.props.navigator.push({ name: 'PRODUCT_DETAIL', product });
    }

    render() {
        const {
            productItemStyle, productDescBlockStyle,
            productImageStyle, productTitleStyle,
            productPriceStyle, productDetailBlockStyle,
            productDetailStyle, productDetailModifyNumber,
            productColorImageStyle
        } = styles;

        const { product } = this.props;
        return (
            <View style={productItemStyle}>
                <Image style={productImageStyle} source={{ uri: product.image }} />
                <View style={productDescBlockStyle}>
                    <Text style={productTitleStyle}>{product.name}</Text>
                    <Text style={productPriceStyle}>{product.price}$</Text>
                    <View style={productDetailBlockStyle}>
                        <View style={productDetailModifyNumber}>
                            <Text>{product.type}</Text>
                        </View>
                        <View style={[productColorImageStyle, { backgroundColor: product.color }]} />
                        <TouchableOpacity style={{ flex: 1 }} onPress={this.gotoProductDetail.bind(this, product)}>
                            <Text style={productDetailStyle}>Show Detail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

// 361 x 452
const imageWidth = (361 / 4);
const imageHeight = (imageWidth / 361) * 452;

const styles = StyleSheet.create({
    productItemStyle: {
        backgroundColor: '#fff',
        paddingTop: 10,
        flexDirection: 'row',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
    },
    productImageStyle: {
        width: imageWidth,
        height: imageHeight,
        margin: 5
    },
    productDescBlockStyle: {
        margin: 5,
        flex: 1,
        justifyContent: 'space-between'
    },
    productDescStyle: {
        fontWeight: 'bold',
        paddingVertical: 5
    },
    productTitleStyle: {
        color: 'gray',
        fontSize: 18,
    },
    productPriceStyle: {
        fontWeight: 'bold',
        color: '#ed28cc',
        paddingVertical: 5
    },
    productDetailBlockStyle: {
        paddingVertical: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    productColorStyle: {
        fontWeight: 'bold',
    },
    productColorImageStyle: {
        width: 20,
        height: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
        marginHorizontal: 10
    },
    productDetailStyle: {
        color: '#ed28cc',
    },
    removeCartItem: {
        top: 10,
        position: 'absolute',
        right: 10
    },
    productDetailModifyNumber: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1
    }
});

export default Item;
