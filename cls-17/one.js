let employees=[
    {eid:101,ename:"rahul"},
    {eid:102,ename:"rahulji"},
    {eid:101,ename:"ramu"}
]
let emp=employees.find((emp)=>{
    return emp.eid===101;
})
console.log(emp);
