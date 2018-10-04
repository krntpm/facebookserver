'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pass = undefined;
var Pass = exports.Pass = function Pass(sender_Psid, targetAppId) {
    console.log('PASSING THREAD CONTROL')
    let payload = {
        recipient: {
        id: sender_Psid
        },
        target_app_id: targetAppId
        

    };

    return payload;
};