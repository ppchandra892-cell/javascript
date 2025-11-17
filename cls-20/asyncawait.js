let employees=[{eid:102,ename:"rahul"},
    {eid:103,ename:"chandu"}
]
let createemployee=(emp)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let flag=true;
            if(flag){
                resolve("data inserted")
            }else{
                reject("not inserted")
            }
            employees.push(emp)
        },3000)
    })
}
let getemployees=()=>{
    setTimeout(()=>{
        let rows="";
        for( let emp of employees){
         rows=rows+`<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                       </tr>`
        }
        document.getElementById("tbody_data").innerHTML=rows;
    },1000)
}
let exec=async()=>{
    await createemployee({eid:101,ename:"priya"})
    getemployees()
}
exec()
