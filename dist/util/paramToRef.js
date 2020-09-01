"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_demi_1 = require("vue-demi");
function paramToRef(param) {
    if (vue_demi_1.isRef(param)) {
        return param;
    }
    else if (typeof param === 'function') {
        return vue_demi_1.computed(param);
    }
    else {
        return vue_demi_1.ref(param);
    }
}
exports.paramToRef = paramToRef;
//# sourceMappingURL=paramToRef.js.map