var form=document.getElementById("form")
form.addEventListener("submit", function (event) 
{
    event.preventDefault(); // Prevent form submission
    checkInput();
});



function checkInput() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (name === "") {
        setError("name", "Name cannot be empty");
    } else {
        setSuccess("name");
    }

    if (email === "") {
        setError("email", "Email cannot be empty");

    }
else if (!isValidEmail(email)) {
    setError("email", "Enter a valid email");
} else {
    setSuccess("email");
}

if (password === "") {
    setError("password", "Password cannot be empty");
} else {
    setSuccess("password");
}
}

function setError(id, message) {
    let inputField = document.getElementById(id).parentElement;
    inputField.classList.add("error");
    inputField.classList.remove("success");
    inputField.querySelector("small").innerText = message;
    inputField.querySelector("small").style.visibility = "visible";
}

function setSuccess(id) {
    let inputField = document.getElementById(id).parentElement;
    inputField.classList.add("success");
    inputField.classList.remove("error");
    inputField.querySelector("small").style.visibility = "hidden";
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

