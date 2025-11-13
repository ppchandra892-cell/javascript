let employees=[
    {eid:101,ename:"rahul",gender:"male"},
    {eid:102,ename:"rahulji",gender:"male"},
    {eid:101,ename:"ramu",gender:"female"}
]
/* let empl=employees.find(emp=>emp.ename==="rahul")
console.log(empl); */
let employee=employees.find((emp)=>{
    return emp.ename==="rahulji"
})
console.log(employee);