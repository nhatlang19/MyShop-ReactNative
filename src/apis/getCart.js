import { AsyncStorage } from 'react-native';

module.exports = async () => {
    try {
        const carts = await AsyncStorage.getItem('@cart:key');
        if (carts !== null) {
            return JSON.parse(carts);
        }

        return [];
    } catch (error) {
        // Error saving data
        console.log(error);
    }
};
