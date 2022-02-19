//Default 
var calculate = function (price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("Discount Amount: ", discount);
};
calculate(1000);
calculate(1000, 0.30);
//Optional
var detail = function (fname, lname, marks) {
    console.log("Fname: ", fname);
    console.log("Lname: ", lname);
    if (marks != undefined) {
        console.log("Marks: ", marks);
    }
};
detail("Dipali", "Tank");
detail("Dipali", "Tank", 100);
//rest
var add = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("Sum of the numbers: ", sum);
};
add(1, 2, 3);
add(10, 10, 10, 10);
