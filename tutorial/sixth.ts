class clock{
    h:number=4
    m:number=30
    s:number=30

    constructor(h:number,m:number,s:number){
        this.h=h,
        this.m=m,
        this.s=s
    }
    ins(h:number,m:number,s:number):void{
        ++s;
        console.log("New Time : "+h+":"+m+":"+s)
    }
    display(h,m,s):void{
        console.log("Current Time : "+h+":"+m+":"+s)
    }
    gethour():any{
        return this.h;
    }
    getmint():any{
        return this.m;
    }
    getsecond():any{
        return this.s;
    }
}
var obj = new clock(4,40,4)
obj.display(8,20,8)
obj.ins(8,20,8)
console.log("Hour:",obj.gethour())
console.log("Minute:",obj.getmint())
console.log("Second:",obj.getsecond())