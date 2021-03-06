import Config from './config';

module.exports = (user, callback) => {
    fetch(`${Config.BASE_URL}/api/login.php`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: user.email,
            password: user.password
        })
    })
        .then((response) => response.json())
        .then((responseJson) => {
            callback(responseJson);
        })
        .catch((error) => {
            console.error(error);
        });
};
