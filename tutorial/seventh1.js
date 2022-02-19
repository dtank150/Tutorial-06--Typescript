var Emp = /** @class */ (function () {
    function Emp(code, name, designation, pay, HRA, DA) {
        this.code = code;
        this.name = name;
        this.designation = designation;
        this.pay = pay;
        this.HRA = HRA;
        this.DA = DA;
    }
    Emp.prototype.calculate = function () {
        this.HRA = 0.1 * this.pay;
        this.DA = 0.45 * this.pay;
        this.pay + this.HRA + this.DA;
    };
    return Emp;
}());
var emp1 = new Emp(123, "AS", "EMP", 1200, 0.1, 0.45);
emp1.calculate();
console.log("Total Pay= ", emp1.calculate());
