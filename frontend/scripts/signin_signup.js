/*Check whether the user wants to signup or login and act accordingly*/
function loginSignup() {
    document.getElementById("register").addEventListener("click", showSignUp);
    document.getElementById("login").addEventListener("click", loginToMain);
}

/*If the user clicks on signup*/
function showSignUp() {
    /*Defining variables*/
    let loginbox = document.getElementById("loginBox");
    let signupbox = document.getElementById("signupBox");
    let backbtn = document.getElementById("back");
    let submit_signup = document.getElementById("s");

    /*If clicked on signup, go to signup box and hide login box*/
    loginbox.style.display = "none";
    signupbox.style.display = "block";
    backbtn.addEventListener("click", function() {
        signupbox.style.display = "none";
        loginbox.style.display = "block";
    });
    /*When the user fills the values and submits, send the values to the url to save them in the db*/
    submit_signup.addEventListener("click", function() {
        /*Defining Variables*/
        let name = document.getElementById("name").value;
        let email = document.getElementById("email-signup").value;
        let password = document.getElementById("password-signup").value;
        let password_confirmation = document.getElementById("password_confirmation").value;

        console.log(name);
        console.log(email);
        console.log(password);
        console.log(password_confirmation);
        /*Append the variables set by the user to the Form Data to send them to url*/
        let data = new FormData();
        data.append("name", name);
        data.append("email", email);
        data.append("password", password);
        data.append("password_confirmation", password_confirmation);
       // console.log(data);
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/register",
            data: data,
            
        }).then(function(response) {
            console.log(response);
            alert("Success")

            location.href = "signin_signup.html";
        })
        
        
        .catch((err) => alert("Missing info. Try again"));
    });
}

/*If the user clicks on login*/
function loginToMain() {
    /*Defining variables*/
    let email = document.getElementById("email-signin").value;
    let password = document.getElementById("password-signin").value;
    let data = new FormData();

    /*Append the variables set by the user to the Form Data to send them to url*/
    data.append("email", email);
    data.append("password", password);
    axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/login",
        data: data,
        headers: { Authorization: "Bearer" + 'access_token'}
    }).then(function(response) {
        console.log(response);
        console.log(response.data);
        console.log("logged in");
        alert("Welcome!")
        location.href ="main.html";
       
        /*When logged in check if he's an admin or user and direct him to the next page accordingly*/
        
        // if (type == 1) {
        //     location.href =
        //         "http://localhost/ZomatoProject_FrontEnd/view_users.php";
        // } else {
        //     location.href =
        //         "http://localhost/ZomatoProject_FrontEnd/main_page.php";
        // }
        localStorage.setItem("id", response.data.id);
    },
    
    ).catch((err) => alert("You are not Authorized. Please Sign up"));
}
loginSignup();