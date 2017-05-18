import { StyleSheet } from 'react-native';

const imageWidth = (361 / 2.3);
const imageHeight = (imageWidth / 361) * 452;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#dee0e0',
        padding: 15
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
    },
    header: {
        padding: 15,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    back: {
        width: 25,
        height: 25
    },
    cart: {
        width: 25,
        height: 25
    },
    title: {
        fontWeight: 'bold',
        color: '#0eb294',
        fontSize: 20
    },
    detailStyle: {

    },
    imageListStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    imageStyle: {
        width: imageWidth,
        height: imageHeight,
        margin: 5
    },
    titleListStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    nameStyle: {
        fontWeight: 'bold',
        fontFamily: 'Avenir',
        fontSize: 18,
        paddingRight: 5
    },
    priceStyle: {
        fontWeight: 'bold',
        fontFamily: 'Avenir',
        fontSize: 18,
        color: 'gray'
    },
    descStyle: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 170
    },
    descriptionStyle: {
        textAlign: 'justify',
        
    },
    optStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    typeStyle: {
        color: '#ed28cc'
    },
    colorStyle: {
        color: '#ed28cc'
    }
});

module.exports = styles;
