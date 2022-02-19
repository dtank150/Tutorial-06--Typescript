interface memployee{
    code:number;
    name:string;
    designation:string;
    pay:number;
    HRA:number;
    DA:number;
    calculate():void;
}
class Emp implements memployee{
    code:number;
    name:string;
    designation:string;
    pay:number;
    HRA:number;
    DA:number;

    constructor(code:number,name:string,designation:string,pay:number,HRA:number,DA:number){
        this.code=code;
        this.name=name;
        this.designation=designation;
        this.pay=pay;
        this.HRA=HRA;
        this.DA=DA
    }

    calculate():void{
     this.HRA=0.1*this.pay;
     this.DA=0.45*this.pay;   
     this.pay+this.HRA+this.DA; 
    }
}
var emp1 = new Emp(123,"AS","EMP",1200,0.1,0.45)
emp1.calculate()
console.log("Total Pay= ",emp1.calculate())
