let stepsLocations = ["http://localhost:7700/Multi%20Step%20Form/index.html", "http://localhost:7700/Multi%20Step%20Form/step%202.html",
  "http://localhost:7700/Multi%20Step%20Form/step%203.html", "http://localhost:7700/Multi%20Step%20Form/step%204.html"];
let spans = document.querySelectorAll(".box span")
let nextStepInput = document.querySelector(".Next-Step")
let goBackInput = document.querySelector(".Go-Back")
let boxs = document.querySelectorAll(".selectors .box")
let services = [];
if (window.localStorage.getItem("services")) {
  services = JSON.parse(window.localStorage.getItem("services"));
}
if (window.localStorage.getItem("data-duration") === "Yearly") {
  spans.forEach(function(element) {
    element.textContent = `+$${element.textContent.slice(2,element.textContent.indexOf("/"))}0/yr`;
  })
} else {
  spans.forEach(function(element) {
    element.textContent = `+$${element.textContent.slice(2,element.textContent.indexOf("/"))}/mo`
  })
}
getData()
boxs.forEach(function(element) {
  element.onclick = function() {
    if (element.classList.contains("active") === false) {
      element.classList.add("active")
      element.querySelector("input").checked = true
    } else {
      element.classList.remove("active")
      element.querySelector("input").checked = false
    }
    if (element.querySelector("input").checked === true || element.classList.contains("active") === true) {
      const data = {
        id: Date.now(),
        serveiceName: element.querySelector("h4").textContent,
        serveiceSalary: element.querySelector("span").textContent
      }
      services.splice(0, 0, data)
      saveData(services)
    } else {
      element.classList.remove("active")
      deletedData(element.querySelector("h4").textContent)
    }
  }
})

function saveData(services) {
  window.localStorage.setItem("services", JSON.stringify(services))
}

function getData() {
  let data = window.localStorage.getItem("services")
  if (data) {
    let elements = JSON.parse(data)
    elements.forEach(function(element) {
      document.querySelector(`[data-choose="${element.serveiceName}"]`).classList.add("active")
      document.querySelector(`[data-choose="${element.serveiceName}"]`).querySelector("input").checked = true
    })
  }
}

function deletedData(serviceName) {
  services = services.filter((service) => service.serveiceName != serviceName)
  saveData(services)
}
nextStepInput.onclick = function() {
  window.location = stepsLocations[stepsLocations.indexOf(window.location.href) + 1]
}
goBackInput.onclick = function() {
  window.location = stepsLocations[stepsLocations.indexOf(window.location.href) - 1]
}
if (window.localStorage.getItem("services") === "[]") {
  window.localStorage.removeItem("services")
}