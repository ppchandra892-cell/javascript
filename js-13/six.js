function greet(){
console.log(this);
}
greet()
//============================
let wish=()=>{
    console.log(this);
}
wish()