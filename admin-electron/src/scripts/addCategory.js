function addCategories() {
  let add_category = document.getElementById("addCategory");
  add_category.addEventListener("click", function (e) {
    e.preventDefault();
    /*Declaring variables*/

    let name = document.getElementById("nameCat").value;

    /*Append the variables set by the user to the Form Data to send them to url*/
    let data = new FormData();
    data.append("name", name);

    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/v1/admin/add_category",
      data: data,
    }).then(function (response) {
      let result = response.data;
      let message = result.status;
      if (message == "Message Sent!") {
        alert("Category Added!");
      }
    });
  });
}

addCategories();
