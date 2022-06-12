function getCategories(){

  
    axios({
        method: "GET",
        url: "http://127.0.0.1:8000/api/v1/admin/categories",
    }) 
    .then(function(response) {
        

        for (let i = 0; i < response.data.Categories.length; i++) {
            const name = response.data.Categories[i].name;
            const id = response.data.Categories[i].id;
          //  console.log(id);
            const itemDiv = document.getElementById("categories");
            const select = document.getElementById("cars");
            const option = document.createElement("option");

            option.innerText = name;
            option.id = id;
          //  console.log(option.id)
         
            select.appendChild(option);

            itemDiv.appendChild(select);
            

            
    }});
}

getCategories();
