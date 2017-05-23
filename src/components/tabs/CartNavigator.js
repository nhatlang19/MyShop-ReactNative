import React, { Component } from 'react';
import { } from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components';

import Cart from './Cart/Cart';
import ProductDetail from '../products/ProductDetail';

class CartNavigator extends Component {
    render() {
        return (
            <NavigationExperimental.Navigator
                initialRoute={{ name: 'CART' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'CART': return <Cart navigator={navigator} items={this.props.items} />;
                        default:
                            return <ProductDetail navigator={navigator} product={route.product} />;
                    }
                }}
            />
        );
    }
}

export default CartNavigator;
