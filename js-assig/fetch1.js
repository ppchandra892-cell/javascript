function display_data(users){
    let rows="";
    for(let user of users){
        rows=rows+`<tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                   </tr>`
    }
    document.getElementById('tbody_data').innerHTML=rows;

}
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => display_data(json))
  .catch((err) => console.error("Error loading data:", err));

