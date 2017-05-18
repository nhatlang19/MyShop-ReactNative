import React, { Component } from 'react';
import { } from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components';

import HomeView from './Home/Home';
import CategoriesList from '../products/CategoriesList';
import ProductDetail from '../products/ProductDetail';

class Home extends Component {
    renderScene(route, navigator) {
        switch (route.name) {
            case 'HOMEVIEW': return <HomeView navigator={navigator} />;
            case 'CATEGORIES_LIST': return <CategoriesList navigator={navigator} />;
            default:
                return <ProductDetail navigator={navigator} />;
        }
    }

    render() {
        return (
            <NavigationExperimental.Navigator
                initialRoute={{ name: 'HOMEVIEW' }}
                renderScene={this.renderScene}
            />
        );
    }
}

export default Home;
