let myNav = document.querySelector(".nav");
let navLeftSec = document.querySelector(".navLeftSec");
let navRightSec = document.querySelector(".navRightSec");
let navLogoImg = document.querySelector(".navLogo");

// myNav.addEventListener("scroll", () => {

//     navLeftSec.classList.add("navLeft");

// });

window.onscroll = myNavFunction = () => {  
    
    if (window.pageYOffset > 0) {
  
    navLeftSec.classList.add("navLeft");
    navRightSec.classList.add("navRight");
    navLogoImg.classList.add("logoAnimation");
    // navLeftSec.style.paddingRight = "70px";
    // navRightSec.style.paddingLeft = "70px";
    // navLogoImg.style.top = "-10px";
    // navLogoImg.style.width = "300px";
    // navLogoImg.style.paddingRight = "3rem"; 
    } 
   
    else {
    navLeftSec.classList.remove("navLeft");
    navRightSec.classList.remove("navRight");
    navLogoImg.classList.remove("logoAnimation");
    myNav.removeAttribute("Style");
    // navLeftSec.removeAttribute("Style");
    // navRightSec.removeAttribute("Style");
    // navLogoImg.removeAttribute("Style");
    
   }

    if(window.pageYOffset > 500)  {

    myNav.style.backgroundColor = "#000000e6";

   }

}





// Scroll Animation (Reveal Element on Scroll)


let revealElem = document.querySelectorAll('.reveal');


window.addEventListener('scroll', () => {

    for (let i = 0; i < revealElem.length; i++) {

        let windowHeight = window.innerHeight;
        let revealScrollHeight = revealElem[i].getBoundingClientRect().top;
        // let revealPoint = 160;

        if (revealScrollHeight < windowHeight) {
            revealElem[i].classList.add('revealAnimation');
        }

        else {
            revealElem[i].classList.remove('revealAnimation');
        }
    }

});






// Sidebar Open & Close Js

let openNavBtn = document.querySelector(".openNavBtn");
let closeNavBtn = document.querySelector(".closeNavBtn");
let sideBar = document.querySelector(".sideBar");

openNavBtn.addEventListener('click', () => {
    sideBar.classList.add('sideBarAnimation');
    openNavBtn.style.display = "none";
})

closeNavBtn.addEventListener('click', () => {
    sideBar.classList.remove('sideBarAnimation');
    openNavBtn.removeAttribute('style');
})






// Price Tab Js

let cinCardSec = document.querySelector(".cinCardSec");
let cinCard = document.querySelectorAll(".cinCard");
let videoBtn = document.querySelector(".videoBtn");
let photoCardSec = document.querySelector(".photoCardSec");
let photCard = document.querySelectorAll(".photCard");
let photoBtn = document.querySelector(".photoBtn");


cinCard.forEach((currelem, index) => {
    let cinCardAll = cinCard[index];

videoBtn.addEventListener('click', () => {
   
    if (cinCardAll.style.display === "block") {
        cinCardSec.removeAttribute('style');
        cinCardAll.style.display = "none";
        // photoCardSec.style.display = "none";
    }

    else {
        cinCardSec.style.paddingTop = "4rem";   
        cinCardAll.style.display = "block";
        photCard[0].style.display = "none";
        photCard[1].style.display = "none";
        photCard[2].style.display = "none";
        photoCardSec.removeAttribute('style');
    }
});

});



photCard.forEach((currelem, index) => {
    let photCardAll = photCard[index];

photoBtn.addEventListener('click', () => {
   
    if (photCardAll.style.display === "block") {
        photoCardSec.removeAttribute('style');
        photCardAll.style.display = "none";
        // cinCardSec.style.display = "none";
    }

    else {
        photoCardSec.style.paddingTop = "4rem";   
        photCardAll.style.display = "block";
        cinCard[0].style.display = "none";
        cinCard[1].style.display = "none";
        cinCard[2].style.display = "none";
        cinCardSec.removeAttribute('style');
    }
});

});





// typing CSS

let i = 0;
let j = 0;
let text1 = "VIDEOGRAPHY"
let text2 = "PHOTOGRAPHY"
const typingSpeed = 500;
const erasingSpeed = 200;
// const newTextDelay = 2000; // Delay 
let firstTypingArea = document.querySelector(".typeText");
let secondTypingArea = document.querySelector(".text2");
let text1Cursor = document.querySelector(".cursor");
let text2Cursor = document.querySelector(".text2Cursor");



function typingText1() {

    text1Cursor.classList.add('typing');

    if (i < text1.length) {
        text1Cursor.classList.remove('typing');
        firstTypingArea.innerHTML += text1.charAt(i);
        i++;
        setTimeout(typingText1, typingSpeed);
    } else {
        text1Cursor.classList.add('typing');
        setTimeout(eraseText1,  erasingSpeed +2000);
    }
}

function eraseText1() {
    if (i > 0) {
        text1Cursor.classList.remove('typing');
        firstTypingArea.innerHTML = text1.slice(0, i - 1);
        i--;
        setTimeout(eraseText1,  erasingSpeed);
    } else {
        text1Cursor.classList.add('typing');
        setTimeout(typingText1, typingSpeed + 5000);
    }
}

function typingText2() {
    if (j < text1.length) {
        text2Cursor.classList.remove('typing');
        secondTypingArea.innerHTML += text2.charAt(j);
        j++;
        setTimeout(typingText2, typingSpeed);
    } else {
        text2Cursor.classList.add('typing');
        setTimeout(eraseText2,  erasingSpeed + 2000);
    }
}

function eraseText2() {
    if (j > 0) {
        text2Cursor.classList.remove('typing');
        secondTypingArea.innerHTML = text2.slice(0, j - 1);
        j--;
        setTimeout(eraseText2,  erasingSpeed);
    } else {
        text2Cursor.classList.add('typing');
        setTimeout(typingText2, typingSpeed + 5000);
    }
}


// Added Event listner to Document to intiate effect On DOM Load

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typingText1, typingSpeed);
    setTimeout(typingText2, typingSpeed + 10000);

    // if (firstTypingArea.innerHTML = '') {
    //     setTimeout(typingText1, typingSpeed);
    // } 
    
    // if (firstTypingArea.innerHTML === 'VIDEOGRAPHY') {
    //     setTimeout(typingText2, typingSpeed + 10000);
    // } 
});







