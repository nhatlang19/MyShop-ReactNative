module.exports = (url, callback) => {
    fetch(url)
        .then((response) => response.json())
        .then((responseText) => {
            callback(responseText);
        })
        .catch((error) => {
            console.warn(error);
        });
};
