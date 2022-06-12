var logout = document.getElementById("logout");
logout.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.clear();
    location.href ="signin_signup.html";

})