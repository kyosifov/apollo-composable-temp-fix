"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_demi_1 = require("vue-demi");
function useResult(result, defaultValue, pick) {
    return vue_demi_1.computed(function () {
        var value = result.value;
        if (value) {
            if (pick) {
                try {
                    return pick(value);
                }
                catch (e) {
                    // Silent error
                }
            }
            else {
                var keys = Object.keys(value);
                if (keys.length === 1) {
                    // Automatically take the only key in result data
                    return value[keys[0]];
                }
                else {
                    // Return entire result data
                    return value;
                }
            }
        }
        return defaultValue;
    });
}
exports.useResult = useResult;
//# sourceMappingURL=useResult.js.map