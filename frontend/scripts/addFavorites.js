var favButton = document.getElementsByClassName("fav");
favButton.onclick = function (e) {
  e.prevenDefault();
  favId  = document.getElementById(e.target.id);
  console.log(favId);
}
console.log(favButton);
