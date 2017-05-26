import Config from './config';

module.exports = (keyword, callback) => {
    fetch(`${Config.BASE_URL}/api/search.php?keyword=${keyword}`)
        .then((response) => response.json())
        .then((responseText) => {
            callback(responseText);
        })
        .catch((error) => {
            console.warn(error);
        });
};
