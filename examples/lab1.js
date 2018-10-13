"use strict";

const moduleTest = require("../");

var message1 = {};
message1 = {code:5, name:"name1"};

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
    console.log("sucess! ", result);
}, function(err){
    console.log("err! ", err);
})