const input=require('prompt-sync')()
let even=parseInt(input("enter a number:"))
if(!(even%2)){
    console.log("even number")
}
else{
    console.log("odd number")
}