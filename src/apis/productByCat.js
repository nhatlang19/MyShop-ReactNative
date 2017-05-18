import Config from './config';

module.exports = (cid, callback) => {
    fetch(`${Config.BASE_URL}/api/products.php?cid=${cid}`)
        .then((response) => response.json())
        .then((responseText) => {
            callback(responseText.data);
        })
        .catch((error) => {
            console.warn(error);
        });
};
