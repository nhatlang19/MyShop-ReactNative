import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    ScrollView, Image, TouchableOpacity
} from 'react-native';

import styles from '../../styles/CategoriesListStyle';

import backIcon from '../../media/appIcon/backList.png';

import sp1 from '../../media/temp/sp1.jpeg';
import sp2 from '../../media/temp/sp2.jpeg';
import sp3 from '../../media/temp/sp3.jpeg';
import sp4 from '../../media/temp/sp4.jpeg';
import sp5 from '../../media/temp/sp5.jpeg';

class CategoriesList extends Component {
    back() {
        this.props.navigator.pop();
    }

    gotoProductDetail() {
        this.props.navigator.push({ name: 'PRODUCT_DETAIL' });
    }

    render() {
        const {
            wrapper, container, header,
            back, title, productsStyle,
            productItemStyle, productDescBlockStyle,
            productImageStyle, productTitleStyle,
            productPriceStyle, productDescStyle,
            productDetailBlockStyle, productColorStyle,
            productColorImageStyle, productDetailStyle
        } = styles;
        return (
            <View style={wrapper}>
                <View style={container}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.back.bind(this)}>
                            <Image style={back} source={backIcon} />
                        </TouchableOpacity>
                        <Text style={title}>Party Dress</Text>
                        <View />
                    </View>
                    <ScrollView style={productsStyle}>
                        <View style={productItemStyle}>
                            <Image style={productImageStyle} source={sp1} />
                            <View style={productDescBlockStyle}>
                                <Text style={productTitleStyle}>ABCDEF</Text>
                                <Text style={productPriceStyle}>123$</Text>
                                <Text style={productDescStyle}>Material silk</Text>
                                <View style={productDetailBlockStyle}>
                                    <Text style={productColorStyle}>Color RoyalBlue</Text>
                                    <View style={productColorImageStyle} />
                                    <TouchableOpacity onPress={this.gotoProductDetail.bind(this)}>
                                        <Text style={productDetailStyle}>Show Detail</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={productItemStyle}>
                            <Image style={productImageStyle} source={sp2} />
                            <View style={productDescBlockStyle}>
                                <Text style={productTitleStyle}>ABCDEF</Text>
                                <Text style={productPriceStyle}>123$</Text>
                                <Text style={productDescStyle}>Material silk</Text>
                                <View style={productDetailBlockStyle}>
                                    <Text style={productColorStyle}>Color RoyalBlue</Text>
                                    <View style={productColorImageStyle} />
                                    <TouchableOpacity onPress={this.gotoProductDetail.bind(this)}>
                                        <Text style={productDetailStyle}>Show Detail</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={productItemStyle}>
                            <Image style={productImageStyle} source={sp3} />
                            <View style={productDescBlockStyle}>
                                <Text style={productTitleStyle}>ABCDEF</Text>
                                <Text style={productPriceStyle}>123$</Text>
                                <Text style={productDescStyle}>Material silk</Text>
                                <View style={productDetailBlockStyle}>
                                    <Text style={productColorStyle}>Color RoyalBlue</Text>
                                    <View style={productColorImageStyle} />
                                    <TouchableOpacity onPress={this.gotoProductDetail.bind(this)}>
                                        <Text style={productDetailStyle}>Show Detail</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={productItemStyle}>
                            <Image style={productImageStyle} source={sp4} />
                            <View style={productDescBlockStyle}>
                                <Text style={productTitleStyle}>ABCDEF</Text>
                                <Text style={productPriceStyle}>123$</Text>
                                <Text style={productDescStyle}>Material silk</Text>
                                <View style={productDetailBlockStyle}>
                                    <Text style={productColorStyle}>Color RoyalBlue</Text>
                                    <View style={productColorImageStyle} />
                                    <TouchableOpacity onPress={this.gotoProductDetail.bind(this)}>
                                        <Text style={productDetailStyle}>Show Detail</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={productItemStyle}>
                            <Image style={productImageStyle} source={sp5} />
                            <View style={productDescBlockStyle}>
                                <Text style={productTitleStyle}>ABCDEF</Text>
                                <Text style={productPriceStyle}>123$</Text>
                                <Text style={productDescStyle}>Material silk</Text>
                                <View style={productDetailBlockStyle}>
                                    <Text style={productColorStyle}>Color RoyalBlue</Text>
                                    <View style={productColorImageStyle} />
                                    <TouchableOpacity onPress={this.gotoProductDetail.bind(this)}>
                                        <Text style={productDetailStyle}>Show Detail</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

            </View>
        );
    }
}


export default CategoriesList;
