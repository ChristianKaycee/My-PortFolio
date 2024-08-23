//for nav-switch
let navs = document.querySelector(".nav-bar");
let lists = navs.querySelectorAll("ul li a");

lists.forEach(a => {
    a.addEventListener("click", function (e) {
        displayThe(a);
        ul.classList.toggle("show");
        sideBar.classList.toggle("width");
        menu.checked = false;
        e.preventDefault();
    });
});

function displayThe(nav) {
    lists.forEach(link => {
        let sectionId = link.getAttribute("href");
        let section = document.querySelector(sectionId);

        if (link === nav) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}
//for hamburger menu toggle
let menu = document.querySelector(".toggle");
let ul = document.querySelector("ul");
let sideBar = document.querySelector("nav");
menu.addEventListener("change", () => {
    ul.classList.toggle("show");
    sideBar.classList.toggle("width");
});

//typewriter effect
const words = ["Welcome,", "Konnichiwa,", "Hello,", "Hey there,", "Well,"];
const textElement = document.getElementById("text");
let wordIndex = 0;
let charIndex = 0;
let currentWord = words[wordIndex];

function typeWriter() {
    if (charIndex < currentWord.length) {
        textElement.textContent += currentWord.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100); // Adjust typing speed (milliseconds)
    } else {
        setTimeout(erase, 2000); // Wait before erasing (milliseconds)
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Adjust erasing speed (milliseconds)
    } else {
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
        currentWord = words[wordIndex];
        setTimeout(typeWriter, 500); // Wait before typing next word (milliseconds)
    }
}

typeWriter();

//for faqs (about me)
document.querySelectorAll(".minus").forEach(element => {
    element.addEventListener("click", function () {
        let upElement = element.closest(".up");
        if (upElement) {
            let faqHidden = upElement.nextElementSibling;
            if (faqHidden && faqHidden.classList.contains("faq-hidden")) {
                faqHidden.classList.toggle("show");
            }
        }
    });
});

//copyright date
const Mydate = document.querySelector(".date");
const currDate = new Date();
const year = currDate.getFullYear();
Mydate.innerHTML = year;

//for current age
function calculateAge() {
    const birthdate = new Date("2006-07-13");

    function updateAge() {
        const now = new Date();
        const ageInMilliseconds = now - birthdate;

        const seconds = Math.floor(ageInMilliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const years = Math.floor(days / 365);

        const remainingDays = days % 365;
        const remainingHours = hours % 24;
        const remainingMinutes = minutes % 60;
        const remainingSeconds = seconds % 60;

        document.getElementById("myYear").innerHTML = years;
        document.getElementById("myDay").innerHTML = remainingDays;
        document.getElementById("myHr").innerHTML = remainingHours;
        document.getElementById("myMin").innerHTML = remainingMinutes;
        document.getElementById("mySec").innerHTML = remainingSeconds;
        document.getElementById("myMil").innerHTML = ageInMilliseconds;
    }

    updateAge();
    setInterval(updateAge, 1000);  // Update the age every second
}

calculateAge();
//scroll up button
let goup = document.querySelector(".goup");
let upbtn = document.querySelector(".btnup");
function scrollVisible() {
    if (window.scrollY > 30){
        upbtn.classList.add("show");
        goup.classList.add("show");
    }
    else{
        upbtn.classList.remove("show");
        goup.classList.remove("show");
    }
}
function circleLoad() {
    let screenHeight = window.scrollY;
    console.log("screen", screenHeight);
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    console.log("scrollheight",document.documentElement.scrollHeight);
    console.log("docheight",docHeight);
    console.log("windowInner",window.innerHeight);
    let currentHeight = screenHeight / docHeight;
    console.log("current",currentHeight);
    let loadHeight = currentHeight * 360;
    console.log("load",loadHeight);
    upbtn.style.background = `conic-gradient(rgb(19, 177, 239) ${loadHeight}deg, transparent ${loadHeight}deg)`;
}

window.addEventListener("scroll", circleLoad);
circleLoad();
window.addEventListener("scroll", scrollVisible);
scrollVisible();
goup.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Optional, for smooth scrolling effect
    });
});
