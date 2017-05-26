import React, { Component } from 'react';
import { } from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components';

import Search from './Search/Search';
import ProductDetail from '../products/ProductDetail';

class SearchNavigator extends Component {
    render() {
        return (
            <NavigationExperimental.Navigator
                initialRoute={{ name: 'SEARCH' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'SEARCH': return <Search navigator={navigator} products={this.props.products} />;
                        default:
                            return <ProductDetail navigator={navigator} product={route.product} />;
                    }
                }}
            />
        );
    }
}

export default SearchNavigator;
