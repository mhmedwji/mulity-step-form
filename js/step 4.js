let container = document.querySelector(".finish-up .container")
let page = document.querySelector(".page")
let total = 0;
let totalDiv = document.querySelector(".total")
let totalSalary = document.querySelector(".total span")
let totalDuration = document.querySelector(".total p")
let containerText = document.querySelector(".finish-up .container .text")
let card = document.createElement("div")
let confirmInput = document.querySelector(".finish-up .container .confirm")
let goBackInput = document.querySelector(".finish-up .container .Go-Back")
let stepsLocations = ["http://localhost:7700/Multi%20Step%20Form/index.html", "http://localhost:7700/Multi%20Step%20Form/step%202.html",
  "http://localhost:7700/Multi%20Step%20Form/step%203.html", "http://localhost:7700/Multi%20Step%20Form/step%204.html"];
if (window.localStorage.getItem("dataChoose") && window.localStorage.getItem("salary") && window.localStorage.getItem("data-duration")) {
  let choices = document.createElement("div")
  choices.classList.add("choices")
  card.classList.add("card")
  let cardText = document.createElement("div")
  cardText.classList.add("text")
  cardTextH4 = document.createElement("h4")
  cardTextA = document.createElement("a")
  cardSpan = document.createElement("span")
  cardTextH4Text = document.createTextNode(`${window.localStorage.getItem("dataChoose")} (${window.localStorage.getItem("data-duration")})`)
  cardTextH4.appendChild(cardTextH4Text)
  cardTextAText = document.createTextNode("Change")
  cardTextA.appendChild(cardTextAText)
  cardTextA.href = "step 2.html";
  cardSpanText = document.createTextNode(`${window.localStorage.getItem("salary")}`)
  cardSpan.appendChild(cardSpanText)
  cardText.appendChild(cardTextH4)
  cardText.appendChild(cardTextA)
  card.appendChild(cardText)
  card.appendChild(cardSpan)
  choices.appendChild(card)
  containerText.after(choices)
  if (window.localStorage.getItem("data-duration") === "Yearly") {
    totalSalary.innerHTML = `$${+card.querySelector("span").textContent.slice(1,card.querySelector("span").textContent.indexOf("/"))}/yr`;
    totalDuration.innerHTML = `Total (Per ${window.localStorage.getItem("data-duration")})`
  } else {
    totalSalary.innerHTML = `$${+card.querySelector("span").textContent.slice(1,card.querySelector("span").textContent.indexOf("/"))}/mo`
    totalDuration.innerHTML = `Total (Per ${window.localStorage.getItem("data-duration")})`
  }
} else {
  totalSalary.innerHTML = "Unknown"
  totalDuration.innerHTML = `Total (Per Unknown)`
}
if (window.localStorage.getItem("services") && window.localStorage.getItem("dataChoose") && window.localStorage.getItem("salary") && window.localStorage
  .getItem("data-duration")) {
  let services = JSON.parse(window.localStorage.getItem("services"))
  services.forEach(function(element) {
    if (window.localStorage.getItem("data-duration") === "Yearly") {
      element.serveiceSalary = `+$${element.serveiceSalary.slice(2,element.serveiceSalary.indexOf("/"))}/yr`;
    } else { 
      element.serveiceSalary = `+$${element.serveiceSalary.slice(2,element.serveiceSalary.indexOf("0"))}/mo`; 
    }
    let box = document.createElement("div")
    box.classList.add("box")
    boxH4 = document.createElement("h4")
    boxSpan = document.createElement("span")
    boxH4Text = document.createTextNode(`${element.serveiceName}`)
    boxSpanText = document.createTextNode(`${element.serveiceSalary}`)
    boxH4.appendChild(boxH4Text)
    boxSpan.appendChild(boxSpanText)
    box.appendChild(boxH4)
    box.appendChild(boxSpan)
    card.after(box)
  })
  document.querySelectorAll(".box span").forEach(function(element) {
    return total += +element.textContent.slice(2, element.textContent.indexOf("/"))
  })
  if (window.localStorage.getItem("data-duration") === "Yearly") {
    totalSalary.innerHTML =
      `$${+card.querySelector("span").innerHTML.slice(1,card.querySelector("span").innerHTML.indexOf("/"))+ total}/yr`
    totalDuration.innerHTML = `Total (Per ${window.localStorage.getItem("data-duration")})`
  } else {
    totalSalary.innerHTML =
      `$${+card.querySelector("span").innerHTML.slice(1,card.querySelector("span").innerHTML.indexOf("/"))+total}/mo`;
    totalDuration.innerHTML = `Total (Per ${window.localStorage.getItem("data-duration")})`
  }
}
goBackInput.onclick = function() {
  window.location = stepsLocations[stepsLocations.indexOf(window.location.href) - 1]
}
confirmInput.onclick = function() {
  container.innerHTML = "";
  container.classList.add("active")
  page.classList.add("active")
  let goodbye = document.createElement("div")
  goodbye.classList.add("goodbye")
  let image = document.createElement("img")
  image.src = "/mulity-step-form/assets /images/icon-thank-you.svg";
  let text = document.createElement("div")
  text.classList.add("text")
  let textH2 = document.createElement("h2")
  let textH2Text = document.createTextNode("Thank you!")
  let textP = document.createElement("p")
  let textPText = document.createTextNode(
    "Thanks for confirming your subscription! We hope you have fun using our platform.If you ever need support, please feel free to email us at support @loremgaming.com."
  )
  textP.appendChild(textPText)
  textH2.appendChild(textH2Text)
  text.appendChild(textH2)
  text.appendChild(textP)
  goodbye.appendChild(image)
  goodbye.appendChild(text)
  container.appendChild(goodbye)
}
let query = window.matchMedia("(min-width:768px)")
if (document.querySelector(".card") && query.matches) {
  totalDiv.style.cssText = "position: absolute;top:130px";
}
if (document.querySelector(".card") && query.matches && document.querySelectorAll(".finish-up .container .box").length === 1) {
  totalDiv.style.cssText = "position: absolute;top:160px";
}
if (document.querySelector(".card") && query.matches && document.querySelectorAll(".finish-up .container .box").length === 2) {
  totalDiv.style.cssText = "position: absolute;top:195px";
}
if (document.querySelector(".card") && query.matches && document.querySelectorAll(".finish-up .container .box").length === 3) {
  totalDiv.style.cssText = "position: absolute;top:230px";
}
if (window.localStorage.getItem("services") && window.localStorage.getItem("dataChoose") && window.localStorage.getItem("salary") && window.localStorage
  .getItem("data-duration")) {}