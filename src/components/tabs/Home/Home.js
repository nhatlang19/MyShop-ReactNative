import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Collection from './Collection';
import Slideshow from './Slideshow';
import TopProduct from './TopProduct';

class Home extends Component {

    render() {
        const { wrapper } = styles;
        return (
            <ScrollView style={wrapper}>
                <Collection />
                <Slideshow navigator={this.props.navigator} />
                <TopProduct navigator={this.props.navigator} />
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
