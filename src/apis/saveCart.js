import { AsyncStorage } from 'react-native';

module.exports = async (carts) => {
    try {
        await AsyncStorage.setItem('@cart:key', JSON.stringify(carts));
    } catch (error) {
        // Error saving data
        console.log(error);
    }
};
