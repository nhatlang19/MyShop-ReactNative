import React, { Component } from 'react';
import {
    View, StyleSheet, Text,
    Dimensions, Image, TouchableOpacity, ListView
} from 'react-native';

import sp1 from '../../../media/temp/sp1.jpeg';
import sp2 from '../../../media/temp/sp2.jpeg';
import sp3 from '../../../media/temp/sp3.jpeg';
import sp4 from '../../../media/temp/sp4.jpeg';
import sp5 from '../../../media/temp/sp5.jpeg';

const { width, height } = Dimensions.get('window');


class TopProduct extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        const products = [
            { key: 0, imgUrl: sp1, price: '120$', name: 'Maxi Dress' },
            { key: 1, imgUrl: sp2, price: '120$', name: 'Maxi Dress' },
            { key: 2, imgUrl: sp3, price: '120$', name: 'Maxi Dress' },
            { key: 3, imgUrl: sp4, price: '120$', name: 'Maxi Dress' },
            { key: 4, imgUrl: sp5, price: '120$', name: 'Maxi Dress' },
        ];
        this.state = {
            dataSource: ds.cloneWithRows(products)
        };
    }


    render() {
        const {
            wrapper, titleStyle, list, item, imageItem,
            productName, productPrice
        } = styles;
        return (
            <View style={wrapper}>
                <Text style={titleStyle}>TOP PRODUCT</Text>
                <View>
                    <ListView
                        contentContainerStyle={list}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => (
                            <View style={item}>
                                <Image style={imageItem} source={rowData.imgUrl} />
                                <Text style={productName}>{rowData.name}</Text>
                                <Text style={productPrice}>{rowData.price}</Text>
                            </View>
                        )
                        }
                    />
                </View>
            </View>
        );
    }
}
// 361 x 452
const imageWidth = (361 / 2) - 20;
const imageHeight = (imageWidth / 361) * 452;

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
    titleStyle: {
        paddingVertical: 10,
        color: 'gray',
        fontSize: 20,
        fontFamily: 'Avenir'
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        margin: 5,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
        padding: 5
    },
    imageItem: {
        width: imageWidth,
        height: imageHeight,

    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productPrice: {
        color: 'pink'
    }
});

export default TopProduct;
