'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Take = undefined;
var Take = exports.Take = function Take(sender_Psid) {
    console.log('TAKING THREAD CONTROL')
    let payload = {
        recipient: {
        id: sender_Psid
        }
    };

    return payload;

};