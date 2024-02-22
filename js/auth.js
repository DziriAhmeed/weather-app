window.users = window.users ||  [];




    //sign Up form Listener
document.getElementById("signUpForm").addEventListener("submit", function (e) {
    e.preventDefault();
    verifySignUp();
});


//sign In form Listener
document.getElementById("signInForm").addEventListener("submit", function (e) {
    e.preventDefault();
    verifySignIn();
});


//reset styling and error messages when user focuses on signUp input fields
document.getElementById("email").addEventListener("focus", function () {
    document.getElementById("email").style.border = "";
    document.getElementById("emailError").innerHTML = "";
})
document.getElementById("password").addEventListener("focus", function () {
    document.getElementById("password").style.border = "";
    document.getElementById("passwordError").innerHTML = "";
})
document.getElementById("confirmPassword").addEventListener("focus", function () {
    document.getElementById("confirmPassword").style.border = "";
    document.getElementById("confirmPasswordError").innerHTML = "";
})


//reset styling and error messages when user focuses on signIn input fields
document.getElementById("signInEmail").addEventListener("focus", function () {
    document.getElementById("signInEmail").style.border = "";
    document.getElementById("signInError").innerHTML = "";
})
document.getElementById("signInPassword").addEventListener("focus", function () {
    document.getElementById("signInPassword").style.border = "";
    document.getElementById("signInError").innerHTML = "";
})




//listener to switch between sign up and sign in forms
document.getElementById('signUpButton').addEventListener('click', function(){
    document.getElementById('container1').className="hiden-container";
    document.getElementById('container2').className="show-container";
    document.getElementById("signInForm").reset();
})
document.getElementById('signInButton').addEventListener('click', function(){
    document.getElementById('container1').className="show-container";
    document.getElementById('container2').className="hiden-container";
    document.getElementById("signUpForm").reset();
})




//function to verify sign up credentials
function verifySignUpCredentials(email, password, confirmPassword) {
 
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
 
  if (!emailRegex.test(email)) {
    document.getElementById("email").style.border = "1px solid red";
    document.getElementById("emailError").innerHTML = "Invalid email address.";
    document.getElementById("emailError").style.color = "red";
    return false;
  } else if (password != confirmPassword) {
    document.getElementById("password").style.border = "1px solid red";
    document.getElementById("confirmPassword").style.border = "1px solid red";
    document.getElementById("passwordError").innerHTML =
      "Passwords do not match.";
    document.getElementById("passwordError").style.color = "red";
    document.getElementById("confirmPasswordError").innerHTML =
      "Passwords do not match.";
    document.getElementById("confirmPasswordError").style.color = "red";


    return false;
  }
  return true;
}




//function to verify sign up and add user to database/arrayOfUsers
function verifySignUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if(verifySignUpCredentials(email, password, confirmPassword)){
        var newUser = {
            email: email,
            password: password
        };
        window.users.push(newUser);
        console.log(window.users);
        document.getElementById("signUpForm").reset();
    }
}


function verifySignIn() {
    var email = document.getElementById("signInEmail").value;
    var password = document.getElementById("signInPassword").value;
    const userFound = window.users.find((user) => user.email === email && user.password === password);
    if (userFound) {
        window.location.href = "index.html";
    }
    document.getElementById("signInEmail").style.border = "1px solid red";
            document.getElementById("signInPassword").style.border = "1px solid red";
            document.getElementById("signInError").innerHTML = "Invalid email or password.";
            document.getElementById("signInError").style.color = "red";
    console.log("User not found");
}
