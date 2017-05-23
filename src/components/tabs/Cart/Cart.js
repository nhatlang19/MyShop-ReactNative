import React, { Component } from 'react';
import { StyleSheet, ListView } from 'react-native';

import CartItem from '../Cart/CartItem';

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { wrapper } = styles;

        const { navigator } = this.props;

        return (
            <ListView
                removeClippedSubviews={false}
                enableEmptySections
                style={wrapper}
                dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(this.props.items)}
                renderRow={(product) => (
                    <CartItem product={product} navigator={navigator} />
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#dee0e0',
        padding: 15
    }
});


export default Cart;
