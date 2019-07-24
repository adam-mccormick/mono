
const crypto = require('@yaka/crypto');

module.exports.list = (event, context, callback) => {

    const response = {
        statusCode: 200,
        body: crypto.encrypt("I AM A USER WORLD")
    }

    callback(null, response);
}