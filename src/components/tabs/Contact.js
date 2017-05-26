import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text, Image } from 'react-native';

import MapView from 'react-native-maps';

import locationImg from '../../media/appIcon/location.png';
import phoneImg from '../../media/appIcon/phone.png';
import mailImg from '../../media/appIcon/mail.png';
import messageImg from '../../media/appIcon/message.png';

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
        const { 
            wrapper, mapViewStyle, mapStyle,
            contactViewStyle, addressStyle,
            contactTextStyle, iconStyle,
            addressStyleNoBorder
        } = styles;
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
                <View style={contactViewStyle}>
                    <View style={addressStyle}>
                        <Image source={locationImg} style={iconStyle} />
                        <View />
                        <Text style={contactTextStyle}>Tran Quang Dieu str, District 3</Text>
                    </View>
                    <View style={addressStyle}>
                        <Image source={phoneImg} style={iconStyle} />
                        <View />
                        <Text style={contactTextStyle}>0909 999 999</Text>
                    </View>
                    <View style={addressStyle}>
                        <Image source={mailImg} style={iconStyle} />
                        <View />
                        <Text style={contactTextStyle}>admin@myshop.com</Text>
                    </View>
                    <View style={addressStyleNoBorder}>
                        <Image source={messageImg} style={iconStyle} />
                        <View />
                        <Text style={contactTextStyle}>0909 999 999</Text>
                    </View>
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
        flex: 1
    },
    mapStyle: {
        flex: 1
    },
    contactViewStyle: {
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    addressStyle: {
        borderBottomWidth: 1,
        borderColor: '#d6d6d6',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        marginHorizontal: 10
    },
    contactTextStyle: {
        color: '#ed28cc'
    },
    iconStyle: {
        width: 30,
        height: 30
    },
    addressStyleNoBorder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        marginHorizontal: 10
    }
});

export default Contact;
