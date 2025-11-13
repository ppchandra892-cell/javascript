let employees=[
    {eid:101,ename:"rahul",gender:"male"},
    {eid:102,ename:"rahulji",gender:"male"},
    {eid:101,ename:"ramu",gender:"female"}
]
let male_employee=employees.filter((emp)=>{
    return emp.gender==="male"
})
console.log(male_employee);
let female_employee=[];
for(let emp of employees){
    if(emp.gender==="female"){
        female_employee.push(emp)
    }
}
console.log(female_employee);