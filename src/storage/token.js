import { AsyncStorage } from 'react-native';

const TOKENKEY = '@token:key';
const ISLOGGEDIN = '@isLogin:key';

module.exports = {
    async saveToken(token) {
        try {
            await AsyncStorage.setItem(TOKENKEY, token);
            await AsyncStorage.setItem(ISLOGGEDIN, 'true');
        } catch (error) {
            // Error saving data
            console.log(error);
        }
    },

    async getToken() {
        try {
            const value = await AsyncStorage.getItem(TOKENKEY);
            console.log(123);
            if (value !== null) {
                console.log(value);
                // We have data!!
                
                return value;
            }
        } catch (error) {
            // Error retrieving data
            console.log(error);
        }
    },

    async isLoggedIn() {
        try {
            const value = await AsyncStorage.getItem(ISLOGGEDIN);
            if (value !== null && value === 'true') {
                // We have data!!
                return true;
            } 
            return false;
        } catch (error) {
            console.log(error);
            // Error retrieving data
        }
    },

    async logout() {
        try {
            await AsyncStorage.removeItem(TOKENKEY);
            await AsyncStorage.removeItem(ISLOGGEDIN);
        } catch (error) {
            // Error saving data
            console.log(error);
        }
    }
};
