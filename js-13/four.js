/* function add(a,b){

}
let r1=add(10,20);
console.log(r1);//30
========================= */
let add2=(a,b)=>{
    return a+b+1
}
let r2=add2(10,20)
console.log(r2);//31
//===========================
let add3=(a,b)=>a+b+1  //implicit return
let r3=add3(19,39)
console.log(r3);//59
//===========================
let wish=ename=>"Hello - "+ename+" GM";
let msg = wish("Rahul")
console.log(msg)
//Fat arrow with implicit return