import React, { Component } from 'react';
import { StyleSheet, ListView, RefreshControl } from 'react-native';

import Product from './Item';
import ApiSearch from '../../../apis/search2';

class Search extends Component {
    constructor(props) {
        super(props);
        const list = this.props.products !== null ? this.props.products.data : [];
        const nextUrl = this.props.products !== null ? this.props.products.next : '';
        this.state = {
            refreshing: false,
            products: list,
            next: nextUrl
        };
    }

    componentWillReceiveProps(nextProps) {
        const products = nextProps.products.data;
        const next = nextProps.products.next;
        this.setState({ next, products });
    }

    onRefresh(url) {
        if (url !== '') {
            this.setState({ refreshing: true });
            ApiSearch(url, (res) => {
                const products = this.state.products.concat(res.data);
                const next = res.next;
                this.setState({ next, products });
                this.setState({ refreshing: false });
            });
        }
    }

    render() {
        const { wrapper } = styles;

        const { navigator } = this.props;

        return (
            <ListView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh.bind(this, this.state.next)}
                    />
                }
                removeClippedSubviews={false}
                enableEmptySections
                style={wrapper}
                dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(this.state.products)}
                renderRow={(product) => (
                    <Product product={product} navigator={navigator} />
                )}
                /*onEndReached={this.onRefresh.bind(this, this.state.next)}*/
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

export default Search;
