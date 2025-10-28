/* let numbers=[24,424.2424,3,9]
for(number of numbers){
    if(number%2!==0){
        break;
    }
    console.log(number);
}
 */
function cal(){
let numbers=[10,20,25,30,40]
for(number of numbers){
    if(number%2!==0){
       // break; it comes out from loop
       return   //it is come out from block
    }
    console.log(number);
}
console.log("gm");
}
cal()