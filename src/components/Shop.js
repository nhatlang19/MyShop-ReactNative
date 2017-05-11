import React, { Component } from 'react';
import { View } from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Cart from './tabs/Cart';
import Contact from './tabs/Contact';
import Home from './tabs/Home';
import Search from './tabs/Search';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            numberInCart: 0
        };
    }

    openMenu() {
        this.props.open();
    }
    
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    //renderIcon={() => <Image source={...} />}
                    //renderSelectedIcon={() => <Image source={...} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}
                >
                    <Home />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'cart'}
                    title="Cart"
                    badgeText="{this.state.numberInCart}"
                    //renderIcon={() => <Image source={...} />}
                    //renderSelectedIcon={() => <Image source={...} />}
                    //renderBadge={() => <CustomBadgeView />}
                    onPress={() => this.setState({ selectedTab: 'cart' })}
                >
                    <Cart />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'search'}
                    title="Search"
                    //renderIcon={() => <Image source={...} />}
                    //renderSelectedIcon={() => <Image source={...} />}
                    //renderBadge={() => <CustomBadgeView />}
                    onPress={() => this.setState({ selectedTab: 'search' })}
                >
                    <Search />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'contact'}
                    title="Contact"
                    //renderIcon={() => <Image source={...} />}
                    //renderSelectedIcon={() => <Image source={...} />}
                    //renderBadge={() => <CustomBadgeView />}
                    onPress={() => this.setState({ selectedTab: 'contact' })}
                >
                    <Contact />
                </TabNavigator.Item>
            </TabNavigator>
            </View>
        );
    }
}

export default Shop;
