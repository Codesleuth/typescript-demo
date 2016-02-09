"use strict";
var Thing = (function () {
    function Thing() {
        this._that = 'thing';
    }
    Object.defineProperty(Thing.prototype, "That", {
        get: function () {
            return this._that;
        },
        enumerable: true,
        configurable: true
    });
    return Thing;
})();
console.log(new Thing().That);
