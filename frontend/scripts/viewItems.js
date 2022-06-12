window.onload = function () {
  let headers = {};
        headers.Authorization = "Bearer " + localStorage.getItem("token");
  axios({

    method: "GET",
    url: "http://127.0.0.1:8000/api/v1/admin/items",
    headers : headers,
  }).then(function (response) {
    const itemDiv = document.getElementById("items");
    itemDiv.innerHTML = "";

    for (let i = 0; i < response.data.items.length; i++) {
      const name = response.data.items[i].name;
      const price = response.data.items[i].price;
      const image = response.data.items[i].image;
      const id = response.data.items[i].id;

      //console.log(name)
      // console.log(price);
      // console.log(image);

      const itemDiv = document.getElementById("items");

      const my_div = document.createElement("div");
      my_div.setAttribute("class", "divvv");

      const itemName = document.createElement("p");
      const itemImg = document.createElement("img");
      const itemPrice = document.createElement("p");
      const favButton = document.createElement("button");
      favButton.setAttribute("id", id);
      favButton.setAttribute("class", "fav");

      itemName.innerText = "name: " + name;
      itemImg.src = "./assets/car1.jpg";
      console.log(itemImg.src);
      console.log(itemImg.src);
      console.log(image);

      itemPrice.innerText = "price: " + price;
      favButton.innerHTML = `&#11088;` + "Favorites";

      my_div.appendChild(itemName);
      my_div.appendChild(itemImg);
      my_div.appendChild(itemPrice);
      my_div.appendChild(favButton);

      itemDiv.appendChild(my_div);


      favButton.onclick = function (e) {
       
         console.log(id);
        
         let data = new FormData();
        
        data.append("item_id", id);
        console.log(data);
        let headers = {};
        headers.Authorization = "Bearer " + localStorage.getItem("token");
        axios({
          method: "post",
          url: "http://127.0.0.1:8000/api/v1/user/add_favorites",
          data:data,
          headers : headers,
        
        }).then(function (response) {
          console.log(response)
          let result = response.data;
          let message = result.status;
          if (message == "Message Sent!") {
            alert("Favorites Added!");
          }
        })
      
      };


    
      // };
    }
  });

  var optionss = document.getElementById("cars");
  var displayItems = optionss.addEventListener("change", function () {
    var ids = cars.options[cars.selectedIndex].id;
    console.log(ids.length);
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/api/v1/admin/itemsbycategory/" + `${ids}`,
      headers : {
        "Authorization": "Bearer " + localStorage.getItem("token")
    }
    }).then(function (response) {
      const itemDiv = document.getElementById("items");
      itemDiv.innerHTML = "";

      for (let i = 0; i < response.data.items.length; i++) {
        const name = response.data.items[i].name;
        const price = response.data.items[i].price;
        const image = response.data.items[i].image;
        const id = response.data.items[i].id;
        //console.log(name)
        // console.log(price);
        // console.log(image);

        const itemDiv = document.getElementById("items");

        const my_div = document.createElement("div");
        my_div.setAttribute("class", "divvv");

        const itemName = document.createElement("p");
        const itemImg = document.createElement("img");
        const itemPrice = document.createElement("p");
        const favButton = document.createElement("button");
        favButton.setAttribute("id", id);

        favButton.setAttribute("class", "fav");

        itemName.innerText = "name: " + name;
        itemImg.src = "./assets/car1.jpg";
        console.log(itemImg);
        console.log(image);
        itemPrice.innerText = "price: " + price;
        favButton.innerHTML = `&#11088;` + "Favorites";

        my_div.appendChild(itemName);
        my_div.appendChild(itemImg);
        my_div.appendChild(itemPrice);
        my_div.appendChild(favButton);

        itemDiv.appendChild(my_div);
      }
    });
  });
  
};

