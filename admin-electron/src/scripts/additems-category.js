window.onload = function () {
    axios({
        method: "GET",
        url: "http://127.0.0.1:8000/api/v1/admin/categories",
        headers: {
          'Content-Type': 'multipart/form-data'
        }
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



  console.log("hello");

  function getItems() {
    let add_item = document.getElementById("addItem");
    add_item.addEventListener("click", function (e) {
      e.preventDefault();
      /*Declaring variables*/
      let base64String = "";
      let name = document.getElementById("name").value;
      let price = document.getElementById("price").value;
      let category= cars.options[cars.selectedIndex].id;
      console.log(category);

     
    var imagefile = document.querySelector('#image');



     // const image = document.getElementById("image");
      //console.log(image);
    //  image.addEventListener("change", getImage);

      /*Append the variables set by the user to the Form Data to send them to url*/
      let data = new FormData();
      data.append("name", name);
      data.append("price", price);
      data.append("category_id", category);
      data.append("image", imagefile.files[0]);
      console.log(imagefile.files[0]);

      axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/v1/admin/add_items",
        data: data,
      }).then(function (response) {
      
        let result = response.data;
        let message = result.status;
        if (message == "Message Sent!") {
          alert("Item Added!");
        }
      });

  
    });
  }
  getItems();

}