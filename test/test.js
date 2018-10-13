"use strict";

const assert = require("assert");
const moduleTest = require("../");

var message1 = {};
message1 = {code:6, name:"name1"};

var context = {};
context.manifestObj = {};
context.manifestObj.input = {
    type: "object",
    properties: {
        code: {type: "number", maximum: 5},
        name: {type: "string"}
    }
};

moduleTest.process(message1, context).then(function(result){
    assert.strictEqual(typeof(result), "null");
}, function(err){
    assert.strictEqual(err.code, -32602);
    assert.strictEqual(err.data[0].keyword, "maximum");
})