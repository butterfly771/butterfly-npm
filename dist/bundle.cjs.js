'use strict';

var sum = function (a, b) {
    return a + b;
};
var Butterfly = (function () {
    function Butterfly() {
        this.name = "yueqi";
    }
    Butterfly.prototype.test = function () {
        return sum(1, 2);
    };
    return Butterfly;
}());
console.log(111);

module.exports = Butterfly;
//# sourceMappingURL=bundle.cjs.js.map
