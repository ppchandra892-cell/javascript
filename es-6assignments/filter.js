//Use filter() to get names that start with the letter 's'.
let enames=["chandu","ramu","somu","cheta","gnana","balaji"]
let result=enames.filter((enames=>enames.startsWith('s')))
console.log(result);
//normal function
let enamess=["chandu","ramu","somu","cheta","gnana","balaji"]
function chandu(name){
 return name.startsWith('s')
}
let results=enamess.filter(chandu);
console.log(results)

//inline
let emp=["chandu","ramu","somu","cheta","gnana","balaji"]
let reult=emp.filter(function(name){
    return name[0]==='s'
})
console.log(reult);