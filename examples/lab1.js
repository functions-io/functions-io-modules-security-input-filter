"use strict";

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
message1.body = {code:1, name:"name1"};

moduleTest(message1).then(function(result){
    console.log("sucess! ", result);
}, function(err){
    console.log("err! ", err);
})