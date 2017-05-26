import React, { Component } from 'react';
import {
    View, StyleSheet, Text,
    Image, TouchableOpacity, ListView,
    Dimensions
} from 'react-native';

import ApiTopProduct from '../../../apis/topProduct';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class TopProduct extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds
        };
    }

    componentDidMount() {
        ApiTopProduct((data) => {
            this.setState({ dataSource: this.state.dataSource.cloneWithRows(data) });
        });
    }

    gotoProductDetail(product) {
        this.props.navigator.push({ name: 'PRODUCT_DETAIL', product });
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
                        renderRow={(product) => (
                            <TouchableOpacity key={product.id} onPress={this.gotoProductDetail.bind(this, product)}>
                            <View style={item}>
                                <Image style={imageItem} source={{ uri: product.image }} />
                                <Text style={productName}>{product.name}</Text>
                                <Text style={productPrice}>{product.price}$</Text>
                            </View>
                            </TouchableOpacity>
                        )
                        }
                    />
                </View>
            </View>
        );
    }
}
// 361 x 452
const imageWidth = (deviceWidth / 2.7);
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
