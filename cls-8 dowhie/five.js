let numbers=[56,46,445,363,364,646465]
//wap no of evens using,fir,while,do-while,forof
//for
/* let no_evens=0;
for(i=0;i<=numbers.length-1;i++){
    if(numbers[i]%2===0){
        no_evens++;
    }
}
console.log(no_evens); */
//while
/* let i=0;
let no_evens=0;
while(i<=numbers.length-1){
    if(numbers[i]%2===0){
        no_evens++;
    }
i++;
}
console.log("no of evens:",no_evens)
 */
//do while
 let i=0;
 let no_evens=0;
 do{
    if(numbers[i]%2===0){
        no_evens++;
    }
    i++;
 } while(i<=numbers.length-1)
    console.log("no of even numbers:",no_evens)