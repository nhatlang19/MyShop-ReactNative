import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    Image, TouchableOpacity
} from 'react-native';

import global from '../../../global';

class CartItem extends Component {
    constructor(props) {
        super(props);
        const { product } = this.props;
        this.state = {
            quantity: product.quantity,
        };
    }

    increase(product) {
        const quantity = this.state.quantity + 1;
        this.setState({ quantity });
        global.updateItemCart(Object.assign(product, { quantity }));
    }

    descrease(product) {
        let quantity = this.state.quantity - 1;
        if (quantity < 1) {
            quantity = 1;
        }
        this.setState({ quantity });
        global.updateItemCart(Object.assign(product, { quantity }));
    }

    removeItem(product) {
        global.removeItemCart(product);
    }

    gotoProductDetail(product) {
        this.props.navigator.push({ name: 'PRODUCT_DETAIL', product });
    }

    render() {
        const {
            productItemStyle, productDescBlockStyle,
            productImageStyle, productTitleStyle,
            productPriceStyle, productDetailBlockStyle,
            productDetailStyle, removeCartItem, productDetailModifyNumber,

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
                            <TouchableOpacity onPress={this.increase.bind(this, product)}><Text>+</Text></TouchableOpacity>
                            <Text>{this.state.quantity}</Text>
                            <TouchableOpacity onPress={this.descrease.bind(this, product)}><Text>-</Text></TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }} />
                        
                        <TouchableOpacity style={{ flex: 1 }} onPress={this.gotoProductDetail.bind(this, product)}>
                        <Text style={productDetailStyle}>Show Detail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={removeCartItem} onPress={this.removeItem.bind(this, product)}>
                    <Text>X</Text>
                </TouchableOpacity>
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

export default CartItem;
