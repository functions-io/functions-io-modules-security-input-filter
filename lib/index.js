"use strict";

const Ajv = require("ajv");
const ajv = new Ajv();

module.exports = function(data, context){
    return new Promise(async function (resolve, reject){
        try {
            if (context && context.manifestObj && context.manifestObj.input){
                let validate = ajv.validate(context.manifestObj.input, data);
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