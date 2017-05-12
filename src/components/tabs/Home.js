import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Collection from './Home/Collection';
import Slideshow from './Home/Slideshow';
import TopProduct from './Home/TopProduct';

class Home extends Component {

    render() {
        const { wrapper } = styles;
        return (
            <View style={wrapper}>
                <Collection />
                <Slideshow />
                <TopProduct />
            </View>
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

export default Home;
