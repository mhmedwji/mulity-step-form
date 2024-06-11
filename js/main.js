let errors = document.querySelectorAll(".errors")
let nameRegularExpression = /^[A-Za-z]+\s{1}[A-Za-z]+$/;
let emailRegularExpression = /^[A-Za-z]+[0-9]*\@[A-Za-z]+\.[A-Za-z]+$/;
let numberRegularExpression = /^\+[0-9]+\s{1}[0-9]+$/;
let nameInput = document.getElementById("name")
let emailInput = document.getElementById("email");
let numberInput = document.getElementById("number");
let inputs = [nameInput, emailInput, numberInput];
let stepsLocations = ["http://localhost:7700/Multi%20Step%20Form/index.html", "http://localhost:7700/Multi%20Step%20Form/step%202.html",
  "http://localhost:7700/Multi%20Step%20Form/step%203.html", "http://localhost:7700/Multi%20Step%20Form/step%204.html"];
document.forms[0].onsubmit = function(event) {
  let nameValidation = false;
  let emailValidation = false;
  let numberValidation = false;

}

function validateName() {
  let name = document.querySelectorAll("input[type=text]")[0]
  if (name.value === "") {
    errors[0].innerHTML = "Name Is Required";
    name.style.borderColor = "hsl(354, 84%, 57%)"
    return false;
  }
  errors[0].innerHTML = ''
  name.style.borderColor = ""
  if (name.value.match(nameRegularExpression) === null) {
    errors[0].innerHTML = "Name Is Not Valid"
    name.style.borderColor = "hsl(354, 84%, 57%)"
    return false;
  }
  errors[0].innerHTML = ''
  name.style.borderColor = ""
  return true;
}

function validateemail() {
  let email = document.querySelectorAll("input[type=text]")[1]
  if (email.value === '') {
    errors[1].innerHTML = 'Email Is Required'
    email.style.borderColor = "hsl(354, 84%, 57%)"
    return false;
  }
  errors[1].innerHTML = ''
  email.style.borderColor = ""
  if (!email.value.match(emailRegularExpression)) {
    errors[1].innerHTML = "Email Is Not Valid"
    email.style.borderColor = "hsl(354, 84%, 57%)"
    return false
  }
  errors[1].innerHTML = ''
  email.style.borderColor = ""
  return true
}

function validatenumber() {
  let number = document.querySelectorAll("input[type=text]")[2]
  if (number.value === "") {
    errors[2].innerHTML = "Number Is Required"
    number.style.borderColor = "hsl(354, 84%, 57%)"
    return false;
  }
  errors[2].innerHTML = ''
  number.style.borderColor = ""
  if (number.value.match(numberRegularExpression) === null) {
    errors[2].innerHTML = "Number Is Not Valid"
    number.style.borderColor = "hsl(354, 84%, 57%)"
    return false;
  }
  errors[2].innerHTML = ''
  number.style.borderColor = ""
  return true;
}

function validationForm() {
  if (validateName() && validateemail() && validatenumber()) {
    window.location = stepsLocations[stepsLocations.indexOf(window.location.href) + 1]
    event.preventDefault()
  }
  event.preventDefault()
}