let display=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((products)=>{
        let row="";
        for(let product of products){
            row=row +`<tr>
                        <td>${product.id}</td>
                        <td>${product.name}</td>
                        <td>${product.username}</td>
                    </tr>`;
        }
        document.getElementById("load").innerHTML= row
       })
       .catch((err)=>{console.log("error fetching:",err)})
}