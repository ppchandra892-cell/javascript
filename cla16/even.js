let numbers=[22,44,55,66,77,88,99,90,97]
//wap to print all even numbers
let even=[];
for(let number of numbers){
    if(number%2===0){
        even.push(number)
    }
}
console.log(even);