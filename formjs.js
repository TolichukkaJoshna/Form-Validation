const uname = document.querySelector("#username");
const uerror = document.querySelector(".usernameerror");
const mail = document.querySelector("#email");
const merror = document.querySelector(".mailerror");
const pass1 = document.querySelector("#password1");
const pass1error = document.querySelector(".pass1error");
const pass2 = document.querySelector("#password2");
const pass2error = document.querySelector(".pass2error");
const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
e.preventDefault();
vadliateinputs();
});
function vadliateinputs() {
if (uname.value === "") {
uerror.innerText = "Username is Empty";
uerror.classList.add("error");
uerror.parentElement.classList.add("error");
} else if (uname.value === "username") {
uerror.innerText = "Username cannot be username";
uerror.classList.add("error");
uerror.parentElement.classList.add("error");
} else if (uname.value.length < 5) {
uerror.innerText = "Username cannot be lessthan 5 characters";
uerror.classList.add("error");
uerror.parentElement.classList.add("error");
} else {
uerror.parentElement.classList.add("success");
}

//EMAIL

if (mail.value === "") {

merror.innerText = "Mail is Empty";
merror.classList.add("error");
merror.parentElement.classList.add("error");
} else {
merror.parentElement.classList.add("success");
}

//password
if (pass1.value === "") {
pass1error.classList.add("error");
pass1error.innerText = "Password is Empty";
pass1error.parentElement.classList.add("error");
} else if (pass1.value === "password") {
pass1error.classList.add("error");
pass1error.innerText = "Password cannot be set as password";
pass1error.parentElement.classList.add("error");
} else if (pass1.value.length < 8) {
pass1error.classList.add("error");
pass1error.innerText = "Password cannot be lessthan 8characters";
pass1error.parentElement.classList.add("error");
} else {
pass1error.parentElement.classList.add("success");
}

//password 2
if (pass2.value === "") {
pass2error.classList.add("error");
pass2error.innerText = "Password is Empty";
pass2error.parentElement.classList.add("error");
} else if (pass2.value === "password") {
pass2error.classList.add("error");
pass2error.innerText = "Password cannot be set as password";
pass2error.parentElement.classList.add("error");
} else if (pass2.value.length < 8) {
pass2error.classList.add("error");
pass2error.innerText = "Password cannot be lessthan 8characters";

pass2error.parentElement.classList.add("error");
} else if (pass2.value !== pass1.value) {
pass2error.classList.add("error");
pass2error.innerText = "Passwords Doesnt Match";
pass2error.parentElement.classList.add("error");
pass1error.parentElement.classList.add("error");
} else {
pass2error.parentElement.classList.add("success");
}
}