import Config from './config';

module.exports = (callback) => {
    fetch(`${Config.BASE_URL}/api/top_product.php`)
        .then((response) => response.json())
        .then((responseText) => {
            callback(responseText.data);
        })
        .catch((error) => {
            console.warn(error);
        });
};
