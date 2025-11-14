let employees=[{eid:101,ename:"rahul",esal:34563},
    {eid:102,ename:"rahulji",esal:3456}
]
let createeEmployee=(emps,callback)=>{
    setTimeout(()=>{
        employees.push(emps);
        callback()
    },4000)
}
let getemployees=()=>{
    setTimeout(()=>{
        let rows="";
        for(emp of employees)
            rows=rows+`<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.esal}</td>
                       </tr>`
        document.getElementById("tb_data").innerHTML=rows

    },1000)
}
createeEmployee({eid:103,ename:"ramu",esal:8374},getemployees)
