import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Cart from './tabs/CartNavigator';
import Contact from './tabs/Contact';
import Home from './tabs/Home';
import Search from './tabs/SearchNavigator';

import Header from './common/Header';

import IconHome from '../media/appIcon/home0.png';
import IconHomeSelected from '../media/appIcon/home.png';
import IconCart from '../media/appIcon/cart0.png';
import IconCartSelected from '../media/appIcon/cart.png';
import IconSearch from '../media/appIcon/search0.png';
import IconSearchSelected from '../media/appIcon/search.png';
import IconContact from '../media/appIcon/contact0.png';
import IconContactSelected from '../media/appIcon/contact.png';

import global from '../global';

import saveCart from '../apis/saveCart';
import getCart from '../apis/getCart';
import ApiSearch from '../apis/search';


class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            carts: [],
            products: null
        };

        global.addToCart = this.addToCart.bind(this);
        global.updateItemCart = this.updateItemCart.bind(this);
        global.removeItemCart = this.removeItemCart.bind(this);
    }

    componentDidMount() {
        getCart().then(carts => {
            this.setState({ carts });
        });
    }

    updateItemCart(product) {
        const carts = this.state.carts;
        const index = carts.findIndex(p => p.id === product.id);
        carts[index] = product;
        this.setState({ carts }, () => {
            saveCart(this.state.carts);
        });
    }

    removeItemCart(product) {
        const carts = this.state.carts;
        this.setState({ carts: carts.filter((p) => p.id !== product.id) }, () => {
            saveCart(this.state.carts);
        });
    }

    addToCart(product) {
        this.setState({ carts: this.state.carts.concat(Object.assign(product, { quantity: 1 })) }, () => {
            saveCart(this.state.carts);
        });
    }

    search(keyword) {
        ApiSearch(keyword, (res) => {
            this.setState({ products: res });
        });
    }

    render() {
        const { wrapper, tabIcon, tabItem } = styles;

        return (
            <View style={wrapper}>
                <Header openMenu={this.props.open} search={this.search.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        titleStyle={tabItem}
                        selectedTitleStyle={tabItem}
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image source={IconHome} style={tabIcon} />}
                        renderSelectedIcon={() => <Image source={IconHomeSelected} style={tabIcon} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}
                    >
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        titleStyle={tabItem}
                        selectedTitleStyle={tabItem}
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        badgeText={this.state.carts.length}
                        renderIcon={() => <Image source={IconCart} style={tabIcon} />}
                        renderSelectedIcon={() => <Image source={IconCartSelected} style={tabIcon} />}
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                    >
                        <Cart items={this.state.carts} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        titleStyle={tabItem}
                        selectedTitleStyle={tabItem}
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        renderIcon={() => <Image source={IconSearch} style={tabIcon} />}
                        renderSelectedIcon={() => <Image source={IconSearchSelected} style={tabIcon} />}
                        onPress={() => this.setState({ selectedTab: 'search' })}
                    >
                        <Search products={this.state.products} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        titleStyle={tabItem}
                        selectedTitleStyle={tabItem}
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        renderIcon={() => <Image source={IconContact} style={tabIcon} />}
                        renderSelectedIcon={() => <Image source={IconContactSelected} style={tabIcon} />}
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                    >
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    tabIcon: {
        width: 30,
        height: 30
    },
    tabItem: {
        color: '#51c153'
    }
});

export default Shop;
