var clock = /** @class */ (function () {
    function clock(h, m, s) {
        this.h = 4;
        this.m = 30;
        this.s = 30;
        this.h = h,
            this.m = m,
            this.s = s;
    }
    clock.prototype.ins = function (h, m, s) {
        ++s;
        console.log("New Time : " + h + ":" + m + ":" + s);
    };
    clock.prototype.display = function (h, m, s) {
        console.log("Current Time : " + h + ":" + m + ":" + s);
    };
    clock.prototype.gethour = function () {
        return this.h;
    };
    clock.prototype.getmint = function () {
        return this.m;
    };
    clock.prototype.getsecond = function () {
        return this.s;
    };
    return clock;
}());
var obj = new clock(4, 40, 4);
obj.display(8, 20, 8);
obj.ins(8, 20, 8);
console.log("Hour:", obj.gethour());
console.log("Minute:", obj.getmint());
console.log("Second:", obj.getsecond());
