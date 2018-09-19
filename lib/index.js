"use strict";

const Ajv = require("ajv");
const ajv = new Ajv();

module.exports = function(message){
    return new Promise(async function (resolve, reject){
        try {
            if ((message.manifest) && (message.manifest.input)){
                let validate = ajv.validate(message.manifest.input, message.body);
                if (validate){
                    resolve();
                }
                else{
                    let errObj = {};
                    errObj.code = -32602; //Invalid params
                    errObj.message = "Invalid params";
                    errObj.data = ajv.errors;
                    
                    reject(errObj);
                }
            }
            else{
                resolve();
            }
        }
        catch (errTry) {
            reject(errTry);
        }
    });
};