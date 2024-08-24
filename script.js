//for hamburger menu toggle
let menu = document.querySelector(".toggle");
let sideBar = document.querySelector("nav");
menu.addEventListener("change", () => {
    sideBar.classList.toggle("width");
});

//copyright date
const Mydate = document.querySelector(".date");
const currDate = new Date();
const year = currDate.getFullYear();
Mydate.innerHTML = year;

// Get the current page name from the URL
const pagePath = window.location.pathname;
const pageName = pagePath.substring(pagePath.lastIndexOf('/') + 1);

// Perform actions based on the current page
if (pageName === 'index.html') {
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
    const quotes = [
        {
            quote: "The best way to predict the future is to invent it.",
            author: "Alan Kay"
        },
        {
            quote: "In life, big things come one at a time.",
            author: "Kingdavid Christian"
        },
        {
            quote: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
            author: "Jim Rohn"
        }
    ];
    
    window.onload = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById('quote').textContent = quotes[randomIndex].quote;
        document.getElementById('author').textContent = quotes[randomIndex].author;
    };
    let openDonorPage = document.querySelector(".give-me");
    let closeDonorPage = document.getElementById("close_don");
    let donorPage = document.querySelector(".donate-form");
    let donateBtn = document.getElementById("don_btn");
    let name = document.getElementById("user_name");
    let amount = document.getElementById("amount");
    let email = document.getElementById("user_email");
    let number = document.getElementById("user_num");
    openDonorPage.addEventListener("click",()=>{
        donorPage.classList.add("show");
    })
    closeDonorPage.addEventListener("click",()=>{
        donorPage.classList.remove("show");
    })
    donateBtn.addEventListener("click",(e)=>{
        e.preventDefault();
    })
    function makePayment() {
    let user_num = number.value;
    let user_name = document.getElementById("user_name").value; // Added to ensure `user_name` is defined
    let user_email = email.value;
    let amt = amount.value;

    if (!user_email || !user_num || !user_name || !amt) {
        alert("Please fill in all required fields.");
        return;
    }
        FlutterwaveCheckout({
          public_key: "FLWPUBK_TEST-2a3aac1cee87f8bdb0b0f8d8997b0def-X",
          tx_ref: "KINGSHOW-DI0NzMx53",
          amount: amt,
          currency: "NGN",
          payment_options: "banktransfer,card, ussd",
          meta: {
            source: "docs-inline-test",
            consumer_mac: "92a3-912ba-1192a",
          },
          customer: {
            email: user_email,
            phone_number: user_num,
            name: user_name,
          },
          customizations: {
            title: "KingShow",
            description: "Test Payment",
            logo: "https://checkout.flutterwave.com/assets/img/rave-logo.png",
          },
          callback: function (data){
            console.log("payment callback:", data);
          },
          onclose: function() {
            console.log("Payment cancelled!");
          }
        });
      }
    console.log("home page");
} else if (pageName === 'about.html') {
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
    //for resume
    let resumebtn = document.querySelector(".resume");
    let downloadBox = document.querySelector(".download");
    let closedownload = document.querySelector(".close-dwn");
    let dwnButtons = document.querySelectorAll(".answer button a");

    resumebtn.addEventListener("click", (e) => {
        e.preventDefault();
        downloadBox.classList.add("show_dwn");
    });
    closedownload.addEventListener("click", () => {
        downloadBox.classList.remove("show_dwn");
    });
    dwnButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            downloadBox.classList.remove("show_dwn");
        });
    });

    console.log("about page");
}
else if (pageName === 'projects.html') {
    //scroll up button
    let goup = document.querySelector(".goup");
    let upbtn = document.querySelector(".btnup");
    function scrollVisible() {
        if (window.scrollY > 30) {
            upbtn.classList.add("show");
            goup.classList.add("show");
        }
        else {
            upbtn.classList.remove("show");
            goup.classList.remove("show");
        }
    }
    function circleLoad() {
        let screenHeight = window.scrollY;
        let docHeight = document.documentElement.scrollHeight - window.innerHeight;
        let currentHeight = screenHeight / docHeight;
        let loadHeight = currentHeight * 360;
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


    //project image
    let myProjects = document.querySelector(".my-projects");
    let projectImageBox = myProjects.querySelectorAll(".project-item");

    projectImageBox.forEach(projBox => {
        projBox.addEventListener("click", () => {
            let projectImages = projBox.querySelector(".project-image a img");
            projectImages.classList.toggle("zoom");
        });
    });


    console.log("project page");
} else if (pageName === 'contact.html') {
    // Handle elements unique to page 2
    console.log("contact page");
}
