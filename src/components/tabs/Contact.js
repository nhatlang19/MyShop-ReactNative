import React, { Component } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

import MapView from 'react-native-maps';

const deviceHeight = Dimensions.get('window').height;

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marker: {
                title: 'Hello World',
                description: 'Hi!!!',
                latlng: {
                    latitude: 37.78825,
                    longitude: -122.4324,
                }
            }
        };
    }

    render() {
        const { wrapper, mapViewStyle, mapStyle } = styles;
        const { marker } = this.state;
        return (
            <View style={wrapper}>
                <View style={mapViewStyle}>
                    <MapView
                        style={mapStyle}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <MapView.Marker
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}
                        />
                    </MapView>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#dee0e0',
        padding: 15
    },
    mapViewStyle: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
        height: deviceHeight / 2.5
    },
    mapStyle: {
        flex: 1
    }

});

export default Contact;
