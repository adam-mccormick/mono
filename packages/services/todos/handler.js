const crypto = require('@yaka/crypto');

module.exports.hello = (event, context, callback) => {

    const response = {
        statusCode: 200,
        body: crypto.encrypt("HELLO WORLD")
    }

    callback(null, response);
}