const input=require('prompt-sync')()
let num=parseInt(input("enter a number:"))
let sum =0;
for(let i=1; parseInt(num) !== 0;i++){
    let n = num%10 
  num= parseInt(num/10)
  sum= parseInt(sum*10)+n
}
console.log( sum)
// console.log(rev)