import React, { Component } from 'react';
import {
    View, Text, ListView,
    Image, TouchableOpacity
} from 'react-native';

import styles from '../../styles/CategoriesListStyle';

import ApiGetProducts from '../../apis/productByCat';

import backIcon from '../../media/appIcon/backList.png';

class CategoriesList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds,
        };
    }

    componentDidMount() {
        const { category } = this.props;
        ApiGetProducts(category.id, (res) => {
            this.setState({ dataSource: this.state.dataSource.cloneWithRows(res) });
        });
    }

    back() {
        this.props.navigator.pop();
    }

    gotoProductDetail(product) {
        this.props.navigator.push({ name: 'PRODUCT_DETAIL', product });
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

        const listView = (
            <ListView
                removeClippedSubviews={false}
                enableEmptySections
                style={productsStyle}
                dataSource={this.state.dataSource}
                renderRow={(product) => (
                    <View style={productItemStyle}>
                        <TouchableOpacity onPress={this.gotoProductDetail.bind(this, product)}>
                            <Image style={productImageStyle} source={{ uri: product.image }} />
                        </TouchableOpacity>
                        <View style={productDescBlockStyle}>
                            <Text style={productTitleStyle}>{product.name}</Text>
                            <Text style={productPriceStyle}>{product.price}$</Text>
                            <Text style={productDescStyle}>{product.type}</Text>
                            <View style={productDetailBlockStyle}>
                                <Text style={productColorStyle}>Color {product.colorName}</Text>
                                <View style={[productColorImageStyle, { backgroundColor: product.color }]} />
                                <TouchableOpacity onPress={this.gotoProductDetail.bind(this, product)}>
                                    <Text style={productDetailStyle}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
        );
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
                    {listView}

                </View>
            </View >
        );
    }
}


export default CategoriesList;
