//Default 
var calculate = (price:number,rate:number=0.50)=>{
    var discount = price*rate;
    console.log("Discount Amount: ",discount);
}
calculate(1000);
calculate(1000,0.30)

//Optional
var detail =(fname:string,lname:string,marks?:number)=>{
    console.log("Fname: ", fname);
    console.log("Lname: ", lname);

    if(marks!=undefined){
        console.log("Marks: ", marks);
    }
}
detail("Dipali","Tank");
detail("Dipali","Tank",100)

//rest
var add = (...nums:number[])=>{
    var i;
    var sum:number = 0;

    for(i=0;i<nums.length;i++){
        sum = sum + nums[i];
    }
    console.log("Sum of the numbers: ", sum)
}
add(1,2,3)
add(10,10,10,10)