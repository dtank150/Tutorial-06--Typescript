interface istudent{
    name:string,
    city:string,
    branch:string,
    display:()=>string
}
var student:istudent={
    name:"Dipali",
    city:"Rajkot",
    branch:"CE",
    display:():string=>{
        return "Student Data";
    }
}
console.log(student.display())
console.log("Name:",student.name)
console.log("City:",student.city)
console.log("Branch:",student.branch)