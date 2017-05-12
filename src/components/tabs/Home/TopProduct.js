import React, { Component } from 'react';
import { 
    View, StyleSheet, Text, 
    Dimensions, Image
} from 'react-native';

const { width, height } = Dimensions.get('window');

class TopProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { searchBy: '' };
    }

    render() {
        const { 
            wrapper
        } = styles;
        return (
            <View style={wrapper} />
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 7,
        
    },
});

export default TopProduct;
