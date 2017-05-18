import { StyleSheet } from 'react-native';

// 361 x 452
const imageWidth = (361 / 5);
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
        padding: 5,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    back: {
        width: 30,
        height: 30
    },
    title: {
        fontWeight: 'bold',
        color: 'pink',
        fontSize: 20
    },
    productsStyle: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    productItemStyle: {
        paddingTop: 10,
        borderTopWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row',
        marginBottom: 10
    },
    productImageStyle: {
        width: imageWidth,
        height: imageHeight,
        margin: 5
    },
    productDescBlockStyle: {
        margin: 5
    },
    productDescStyle: {
        fontWeight: 'bold',
        paddingVertical: 5
    },
    productTitleStyle: {
        color: 'gray',
        fontSize: 18,
    },
    productPriceStyle: {
        fontWeight: 'bold',
        color: '#ed28cc',
        paddingVertical: 5
    },
    productDetailBlockStyle: {
        paddingVertical: 5,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    productColorStyle: {
        fontWeight: 'bold',
    },
    productColorImageStyle: {
        width: 20,
        height: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
        marginHorizontal: 10
    },
    productDetailStyle: {
        color: '#ed28cc',
    }
});

module.exports = styles;
