const assert = require('assert');
const crypto = require('@yaka/crypto');

describe("I work", () => {
    it("should work", () => {
        console.log(crypto.encrypt("VALUE"))
        assert(true)
    })
})