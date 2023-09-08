"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePrefixFromKeys = void 0;
function removePrefixFromKeys(obj) {
    const renamedObj = {};
    for (const key in obj) {
        if (key.startsWith('_')) {
            const newKey = key.substr(1);
            renamedObj[newKey] = obj[key];
        }
        else {
            renamedObj[key] = obj[key];
        }
    }
    return renamedObj;
}
exports.removePrefixFromKeys = removePrefixFromKeys;
