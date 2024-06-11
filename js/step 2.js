let boxs = document.querySelectorAll(".cards .box")
let error = document.querySelector(".error")
let toggleSwitch = document.querySelector(".cards .toggle-switch")
let stepsLocations = ["http://localhost:7700/Multi%20Step%20Form/index.html", "http://localhost:7700/Multi%20Step%20Form/step%202.html",
  "http://localhost:7700/Multi%20Step%20Form/step%203.html", "http://localhost:7700/Multi%20Step%20Form/step%204.html"];
let nextStepInput = document.querySelector(".Next-Step")
let goBackInput = document.querySelector(".Go-Back")
let monthly = document.querySelectorAll(".Toggle-Button h5")[0]
let yearly = document.querySelectorAll(".Toggle-Button h5")[1]
let paragraphs = document.querySelectorAll(".cards .box .text p")
let monthsCount = document.querySelectorAll(".months-count");
nextStepInput.onclick = function(event) {
  if (window.localStorage.getItem("dataChoose")) {
    window.location = stepsLocations[stepsLocations.indexOf(window.location.href) + 1];
  } else {
    event.preventDefault()
    error.innerHTML = "please choose thing"
  }
}
goBackInput.onclick = function() {
  window.location = stepsLocations[stepsLocations.indexOf(window.location.href) - 1];
}
if (window.localStorage.getItem("dataChoose")) {
  document.querySelector(`[data-choose="${window.localStorage.getItem("dataChoose")}"]`).classList.add("active")
  if (window.localStorage.getItem("mover") === "set") {
    paragraphs.forEach(function(element) {
      element.querySelector(".duration").textContent = "mo";
      element.querySelector(".salary").textContent =
        `${element.querySelector(".salary").textContent.slice(0,element.querySelector(".salary").textContent.indexOf("0"))}/`;
      window.localStorage.setItem("salary", document.querySelector(`[data-choose="${window.localStorage.getItem("dataChoose")}"]`).querySelector("p")
        .textContent)
    })
  } else if (window.localStorage.getItem("mover") === "move") {
    paragraphs.forEach(function(element) {
      element.querySelector(".duration").textContent = "yr";
      element.querySelector(".salary").textContent =
        `${element.querySelector(".salary").textContent.slice(0,element.querySelector(".salary").textContent.indexOf("0"))}0/`;
      window.localStorage.setItem("salary", document.querySelector(`[data-choose="${window.localStorage.getItem("dataChoose")}"]`).querySelector("p")
        .textContent)
    })

  }else{
    window.localStorage.setItem("salary", document.querySelector(`[data-choose="${window.localStorage.getItem("dataChoose")}"]`).querySelector("p")
  .textContent)
  window.localStorage.setItem("data-duration",monthly.textContent)
  }
}
boxs.forEach(function(box) {
  box.addEventListener("click", function(element) {
    boxs.forEach(function(box) {
      box.classList.remove("active")
    })
    box.classList.add("active")
    window.localStorage.setItem("dataChoose", element.currentTarget.dataset.choose)
  })
})
if (window.localStorage.getItem("mover") === "set") {
  toggleSwitch.classList.remove("active")
  yearly.classList.remove("active")
  monthly.classList.add("active")
  paragraphs.forEach(function(element) {
    element.querySelector(".duration").textContent = "mo";
    element.querySelector(".salary").textContent =
      `${element.querySelector(".salary").textContent.slice(0,element.querySelector(".salary").textContent.indexOf("0"))}/`
  })
  monthsCount.forEach(function(element) {
    element.innerHTML = ""
  })
} else if (window.localStorage.getItem("mover") === "move") {
  toggleSwitch.classList.add("active")
  yearly.classList.add("active")
  monthly.classList.remove("active")
  paragraphs.forEach(function(element) {
    element.querySelector(".duration").textContent = "yr";
    element.querySelector(".salary").textContent =
      `${element.querySelector(".salary").textContent.slice(0,element.querySelector(".salary").textContent.indexOf("0"))}0/`
  })
  monthsCount.forEach(function(element) {
    element.innerHTML = "2 Months Free"
  })
  window.localStorage.setItem("data-duration", yearly.dataset.duration)
}
toggleSwitch.onclick = function() {
  toggleSwitch.classList.toggle("active")
  if (toggleSwitch.classList.contains("active")===false) {
  window.localStorage.setItem("mover", "set")
}
else if (toggleSwitch.classList.contains("active")===true) { window.localStorage.setItem("mover", "move") }
  monthly.classList.toggle("active")
  yearly.classList.toggle("active")
  if (monthly.classList.contains("active") === true) {
    paragraphs.forEach(function(element) {
      element.querySelector(".duration").textContent = "mo";
       element.querySelector(".salary").textContent =
         `${element.querySelector(".salary").textContent.slice(0,element.querySelector(".salary").textContent.indexOf("0"))}/`
       window.localStorage.setItem("salary", element.textContent)
    })
    monthsCount.forEach(function(element) {
      element.innerHTML = "";
    })
    window.localStorage.setItem("data-duration",monthly.textContent)
  } else if (yearly.classList.contains("active") === true) {
    paragraphs.forEach(function(element) {
      element.querySelector(".duration").textContent = "yr";
      monthsCount.forEach(function(element) {
        element.innerHTML = "2 Months Free"
      })
      element.querySelector(".salary").textContent =
        `${element.querySelector(".salary").textContent.slice(0,element.querySelector(".salary").textContent.indexOf("0"))}0/`
      window.localStorage.setItem("salary", element.textContent)
    })
    window.localStorage.setItem("data-duration",yearly.textContent)
  }
}