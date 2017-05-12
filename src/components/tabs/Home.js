import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Collection from './Home/Collection';
import Slideshow from './Home/Slideshow';
import TopProduct from './Home/TopProduct';

class Home extends Component {

    render() {
        const { wrapper } = styles;
        return (
            <ScrollView style={wrapper}>
                <Collection />
                <Slideshow />
                <TopProduct />
            </ScrollView>
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
