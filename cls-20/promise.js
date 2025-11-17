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
        },4000)
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
createemployee({eid:103,ename:"mama"})
.then((msg)=>{
    console.log(msg)
    getemployees()
})
.catch((err)=>{
    console.log(err)
})
