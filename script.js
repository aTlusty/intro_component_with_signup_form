const form = document.getElementById("form");
const first_name = document.getElementById("first-name");
const last_name = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs(){
    const firstNameValue =  first_name.value.trim();
    const lastNameValue = last_name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstNameValue === ""){
        setErrorFor(first_name, "First name cannot be empty");
    } else{
        setSuccessFor(first_name);
    }

    if(lastNameValue === ""){
        setErrorFor(last_name, "Last name cannot be empty")
    } else{
        setSuccessFor(last_name);
    }

    if(emailValue === ""){
        setErrorFor(email, "Email cannot be empty")
    } else if(!isEmail(emailValue)){
        setErrorFor(email, "Email is not valid")
    }

    if(passwordValue === ""){
        setErrorFor(password, "Password cannot be empty");
    } else{
        setSuccessFor(password);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");


    small.innerText = message;
    formControl.className = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValue);
}