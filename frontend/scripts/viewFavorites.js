function viewFavorites() {
  axios({
    method: "GET",
    url: "http://127.0.0.1:8000/api/v1/admin/favorites",
    headers : {
        "Authorization": "Bearer " + localStorage.getItem("access_token")
    }
  }).then(function (response) {
      console.log(response);
    for (let i = 0; i < response.data.Categories.length; i++) {
      var view = document.querySelector("#tab");
      var viewClone = view.cloneNode(true);

      viewClone.id = "viewss";

      viewClone.querySelector("#id").innerText = response.data.Categories[i]["id"];
      viewClone.querySelector("#user_id").innerText = response.data.Categories[i]["user_id"];

      viewClone.querySelector("#item_id").innerText = response.data.Categories[i]["item_id"];

      document.body.appendChild(viewClone);
    }
    document.querySelector("#view").remove;
  });
}
viewFavorites();
