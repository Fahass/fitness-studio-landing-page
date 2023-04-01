const nav = document.querySelector(".navbar")
const logo = document.getElementById("logoT")
const links = document.getElementById("nav-links")
const hamburger = document.getElementById("bar-lines")

const homePage = document.getElementById("home")
const homeOverlay = document.getElementById("bg-overlay")
const aboutPage = document.getElementById("about")
const classesPage = document.getElementById("classes")
const motivationPage = document.getElementById("motivation")
const schedulePage = document.getElementById("schedule")
const trainersPage = document.getElementById("trainers")
const contactPage = document.getElementById("contact")


var firstLine = document.getElementById("first-line")
var secondLine = document.getElementById("sec-line")
var lastLine = document.getElementById("last-line")



let Tag1 = document.querySelector(".tag1")
let Tag2 = document.querySelector(".tag2")
let Tag3 = document.querySelector(".tag3")
let Tag4 = document.querySelector(".tag4")
let Tag5 = document.querySelector(".tag5")




window.addEventListener("scroll", ()=>{

    if(window.scrollY >= 500){
        nav.style.backgroundColor = "#fff"
        links.style.backgroundColor = "#fff"
        logo.style.color = "#000"
        Tag1.style.color = "#000"
        Tag2.style.color = "#000"
        Tag3.style.color = "#000"
        Tag4.style.color = "#000"
        Tag5.style.color = "#000"
    }
    else {
        nav.style.background = "#6f747a66"
        links.style.background = "#4f5353c0"
        logo.style.color = "#fff"
        Tag1.style.color = "#fff"
        Tag2.style.color = "#fff"
        Tag3.style.color = "#fff"
        Tag4.style.color = "#fff"
        Tag5.style.color = "#fff"
    }
    links.classList.remove("active")

    hamburger.classList.remove("active")

    firstLine.classList.remove("active")
    secondLine.classList.remove("active")
    lastLine.classList.remove("active")
    
    
    homePage.classList.remove("active")
    aboutPage.classList.remove("active")
    classesPage.classList.remove("active")
    motivationPage.classList.remove("active")
    schedulePage.classList.remove("active")
    trainersPage.classList.remove("active")
    contactPage.classList.remove("active")
})

hamburger.addEventListener("click", ()=>{
    links.classList.toggle("active")

    hamburger.classList.toggle("active")

    firstLine.classList.toggle("active")
    secondLine.classList.toggle("active")
    lastLine.classList.toggle("active")
    
    
    homePage.classList.toggle("active")
    homeOverlay.classList.toggle("active")
    aboutPage.classList.toggle("active")
    classesPage.classList.toggle("active")
    motivationPage.classList.toggle("active")
    schedulePage.classList.toggle("active")
    trainersPage.classList.toggle("active")
    contactPage.classList.toggle("active")
})
