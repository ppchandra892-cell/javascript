const input=require('prompt-sync')()
let num=parseInt(input("enter number:"))
if(num>=100 && num<=1000){
    console.log("yes given number is 3 digit number")
}
else{
    console.log("not a 3digit number")
}