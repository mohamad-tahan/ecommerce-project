var optionss = document.getElementById("cars");
var displayItems = optionss.addEventListener("change", function () {
  var ids = cars.options[cars.selectedIndex].id;
  console.log(ids.length);
  axios({
    method: "GET",
    url: "http://127.0.0.1:8000/api/v1/admin/itemsbycategory/" + `${ids}`,
  }).then(function (response) {
    // optionss.addEventListener("click",function(){
    //     document.querySelector("#itemDiv").remove;
    // })

    const itemDiv = document.getElementById("items");
    itemDiv.innerHTML = "";

    for (let i = 0; i < response.data.items.length; i++) {
      const name = response.data.items[i].name;
      const price = response.data.items[i].price;
      const image = response.data.items[i].image;
      //console.log(name)
      // console.log(price);
      // console.log(image);

      const itemDiv = document.getElementById("items");

      const my_div = document.createElement("div");

      const itemName = document.createElement("p");
      const itemImg = document.createElement("img");
      const itemPrice = document.createElement("p");

      itemName.innerText = "name: " + name;
      itemImg.src = image;
      itemPrice.innerText = "price: " + price;

      my_div.appendChild(itemName);
      my_div.appendChild(itemImg);
      my_div.appendChild(itemPrice);

      itemDiv.appendChild(my_div);
    }
  });
});
