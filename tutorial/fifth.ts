// single level inheritance which not extends any class 
interface person{
    name:string,
    age:number
}
//multilevel inheritance which extands person class
interface student extends person{
    enrollno:number,
    branch:string
}
// student interface impliments functionalty of person class
var detail : student={
    name:"Dipali",
    age:20,
    enrollno:13055,
    branch:"CE"
}
console.log("Details")
console.log("Name:",detail.name)
console.log("Age:",detail.age)
console.log("Enrollno:",detail.enrollno)
console.log("Branch:",detail.branch)