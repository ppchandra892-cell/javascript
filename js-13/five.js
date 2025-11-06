function wish(){
    console.log("gm");
}
wish()
function wish(){
    console.log("gn");
}
wish()//function hoisting ntg but over riding
//gn
//gn
//==============================================
var wish=()=>{
    console.log("gm");
}
wish()
var wish=()=>{
    console.log("gn");// here no overriding
}
wish()
//gm
//gn