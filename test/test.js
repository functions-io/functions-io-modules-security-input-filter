"use strict";

const assert = require("assert");
const moduleTest = require("../");

var message1 = {};
message1.manifest = {};
message1.manifest.input = {
    type: "object",
    properties: {
        code: {type: "number", maximum: 5},
        name: {type: "string"}
    }
};
message1.body = {code:6, name:"name1"};

moduleTest(message1).then(function(result){
    assert.strictEqual(typeof(result), "null");
}, function(err){
    assert.strictEqual(err.code, -32602);
    assert.strictEqual(err.data[0].keyword, "maximum");
})