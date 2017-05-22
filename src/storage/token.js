import { AsyncStorage } from 'react-native';

const TOKENKEY = '@token';

module.exports = {
    async saveToken(token) {
        try {
            await AsyncStorage.setItem(TOKENKEY, token);
        } catch (error) {
            // Error saving data
        }
    },

    async getToken() {
        try {
            const value = await AsyncStorage.getItem(TOKENKEY);
            if (value !== null) {
                // We have data!!
                return value;
            }
        } catch (error) {
            // Error retrieving data
        }
    }
};
