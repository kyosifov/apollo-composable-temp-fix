"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_demi_1 = require("vue-demi");
function paramToReactive(param) {
    if (vue_demi_1.isRef(param)) {
        return param;
    }
    else if (typeof param === 'function') {
        return vue_demi_1.computed(param);
    }
    else if (param) {
        return vue_demi_1.reactive(param);
    }
    else {
        return param;
    }
}
exports.paramToReactive = paramToReactive;
//# sourceMappingURL=paramToReactive.js.map