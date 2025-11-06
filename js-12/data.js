let employees=[{"emp_id":1,"name":"Saidee","salary":"Creavin"},
{"emp_id":2,"name":"Ignazio","salary":"Wandrach"},
{"emp_id":3,"name":"Michelle","salary":"Falconer-Taylor"},
{"emp_id":4,"name":"Ruthie","salary":"Waghorne"},
{"emp_id":5,"name":"Tim","salary":"Jewes"},
{"emp_id":6,"name":"Dorian","salary":"Carlone"},
{"emp_id":7,"name":"Andromache","salary":"Malins"},
{"emp_id":8,"name":"Cart","salary":"Pollington"},
{"emp_id":9,"name":"Reeta","salary":"Chittleburgh"},
{"emp_id":10,"name":"Berke","salary":"Kitchen"},
{"emp_id":11,"name":"Adelina","salary":"O'Giany"},
{"emp_id":12,"name":"Pavla","salary":"Andreacci"},
{"emp_id":13,"name":"Elsi","salary":"Anfrey"},
{"emp_id":14,"name":"Brendan","salary":"Ambroix"},
{"emp_id":15,"name":"Lewiss","salary":"Baff"},
{"emp_id":16,"name":"Tamera","salary":"Mazdon"},
{"emp_id":17,"name":"Lyon","salary":"Gutcher"},
{"emp_id":18,"name":"Cyrus","salary":"Borth"},
{"emp_id":19,"name":"Bobbie","salary":"Colliar"},
{"emp_id":20,"name":"Reinald","salary":"Dodridge"},
{"emp_id":21,"name":"Ignacius","salary":"Heffernon"},
{"emp_id":22,"name":"Abbey","salary":"Brewis"},
{"emp_id":23,"name":"Amberly","salary":"Liepins"},
{"emp_id":24,"name":"Eydie","salary":"Barthrop"},
{"emp_id":25,"name":"Ritchie","salary":"Crocker"},
{"emp_id":26,"name":"Maura","salary":"Antoszczyk"},
{"emp_id":27,"name":"Katharyn","salary":"Howsin"},
{"emp_id":28,"name":"Oralle","salary":"Billin"},
{"emp_id":29,"name":"Xenos","salary":"Broggini"},
{"emp_id":30,"name":"Trudie","salary":"Wapplington"}]
function display_data(){
    let rows="";
    for(let emp of employees){
        rows=rows+`<tr>
                    <td>${emp.emp_id}</td>
                    <td>${emp.name}</td>
                    <td>${emp.salary}</td>
                  </tr>`
    }
    document.getElementById('tbody_data').innerHTML=rows;
}