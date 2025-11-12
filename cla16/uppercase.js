let enames=["Rahul","chandu","Cheta","bata","Thota"]
//craeate new array with upper case emp names
let users=[]
for(let ename of enames){
    users.push(ename.toUpperCase())
}
console.log(users);