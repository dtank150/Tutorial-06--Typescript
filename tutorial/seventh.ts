interface iemployee{
    code:any,
    name:string,
    designation:string,
    pay:number,
    HRA:number,
    DA:number,
    calculate:()=>void
}
class Employee implements iemployee{
    code:"Code1234"
    name:"ABCD"
    designation:"Employee"
    pay:12000
    HRA:0.1
    DA:0.45

    constructor(code,name,designation,pay,HRA,DA){
     this.code=code,
     this.name=name,
     this.designation=designation,
     this.pay=pay,
     this.HRA=HRA,
     this.DA=DA   
    } 
    calculate():void{
        this.HRA*this.pay,
        this.DA*this.pay

    }   
} 
var emp = new Employee("Code123","ABCD","Employee",12000,0.1,0.45)
console.log("Total Pay:",emp.calculate())
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