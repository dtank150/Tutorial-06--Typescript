var Employee = /** @class */ (function () {
    function Employee(code, name, designation, pay, HRA, DA) {
        this.code = code,
            this.name = name,
            this.designation = designation,
            this.pay = pay,
            this.HRA = HRA,
            this.DA = DA;
    }
    Employee.prototype.calculate = function () {
        this.HRA * this.pay,
            this.DA * this.pay;
    };
    return Employee;
}());
var emp = new Employee("Code123", "ABCD", "Employee", 12000, 0.1, 0.45);
console.log("Total Pay:", emp.calculate());
/*
    code:"Code1234",
    name:"ABCD",
    designation:"Employee",
    pay:12000,
    HRA:0.1,
    DA:0.45,
    calculate:()=>{
        console.log(person.code)
    }
}
var emp{

}
person.calculate()
*/ 
