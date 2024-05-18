let myNav = document.querySelector(".nav");
let navLeftSec = document.querySelector(".navLeftSec");
let navRightSec = document.querySelector(".navRightSec");
let navLogoImg = document.querySelector(".navLogo");

// NAV STICKY JS

window.onscroll = myNavFunction = () => {
  let offset = window.scrollY;

  if (offset > 0) {
    navLeftSec.classList.add("navLeft");
    navRightSec.classList.add("navRight");
    navLogoImg.classList.add("logoAnimation");
  } else {
    navLeftSec.classList.remove("navLeft");
    navRightSec.classList.remove("navRight");
    navLogoImg.classList.remove("logoAnimation");
    myNav.removeAttribute("Style");
  }

  if (offset > 500) {
    myNav.style.backgroundColor = "#000000e6";
  }
};



// SIDEBAR OPEN & CLOSE JS

let openNavBtn = document.querySelector(".openNavBtn");
let closeNavBtn = document.querySelector(".closeNavBtn");
let sideBar = document.querySelector(".sideBar");

openNavBtn.addEventListener("click", () => {
  sideBar.classList.add("sideBarAnimation");
  openNavBtn.style.display = "none";
  document.body.style.overflow = "hidden";
});

closeNavBtn.addEventListener("click", () => {
  sideBar.classList.remove("sideBarAnimation");
  openNavBtn.removeAttribute("style");
  document.body.style.overflow = "";
});



// TYPING JS

let i = 0;
let j = 0;
let text1 = "VIDEOGRAPHY";
let text2 = "PHOTOGRAPHY";
const typingSpeed = 500;
const erasingSpeed = 200;
// const newTextDelay = 2000;   // Delay
let firstTypingArea = document.querySelector(".typeText");
let secondTypingArea = document.querySelector(".text2");
let text1Cursor = document.querySelector(".cursor");
let text2Cursor = document.querySelector(".text2Cursor");

function typingText1() {
  text1Cursor.classList.add("typing");

  if (i < text1.length) {
    text1Cursor.classList.remove("typing");
    firstTypingArea.innerHTML += text1.charAt(i);
    i++;
    setTimeout(typingText1, typingSpeed);
  } else {
    text1Cursor.classList.add("typing");
    setTimeout(eraseText1, erasingSpeed + 2000);
  }
}

function eraseText1() {
  if (i > 0) {
    text1Cursor.classList.remove("typing");
    firstTypingArea.innerHTML = text1.slice(0, i - 1);
    i--;
    setTimeout(eraseText1, erasingSpeed);
  } else {
    text1Cursor.classList.add("typing");
    setTimeout(typingText1, typingSpeed + 5000);
  }
}

function typingText2() {
  if (j < text1.length) {
    text2Cursor.classList.remove("typing");
    secondTypingArea.innerHTML += text2.charAt(j);
    j++;
    setTimeout(typingText2, typingSpeed);
  } else {
    text2Cursor.classList.add("typing");
    setTimeout(eraseText2, erasingSpeed + 2000);
  }
}

function eraseText2() {
  if (j > 0) {
    text2Cursor.classList.remove("typing");
    secondTypingArea.innerHTML = text2.slice(0, j - 1);
    j--;
    setTimeout(eraseText2, erasingSpeed);
  } else {
    text2Cursor.classList.add("typing");
    setTimeout(typingText2, typingSpeed + 5000);
  }
}

// Added Event listner to Document to intiate effect On DOM Load

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(typingText1, typingSpeed);
  setTimeout(typingText2, typingSpeed + 10000);
});



// PRICING TAB JS

let videoBtn = document.querySelector(".videoBtn");
let cinCardSec = document.querySelector(".cinCardSec");
let cinCard = document.querySelectorAll(".cinCard");
let photoBtn = document.querySelector(".photoBtn");
let photoCardSec = document.querySelector(".photoCardSec");
let photCard = document.querySelectorAll(".photCard");


cinCard.forEach((currelem, index) => {

  videoBtn.addEventListener("click", () => {
    if (currelem.style.display === "block") {
      cinCardSec.removeAttribute("style");
      currelem.style.display = "none";
      videoBtn.classList.remove("active");
    } else {
      videoBtn.classList.add("active");
      photoBtn.classList.remove("active");
      cinCardSec.style.paddingTop = "4rem";
      currelem.style.display = "block";
      photoCardSec.removeAttribute("style");
      photCard[index].removeAttribute("style");
    }
  });
});

photCard.forEach((currelem, index) => {

  photoBtn.addEventListener("click", () => {
    if (currelem.style.display === "block") {
      photoCardSec.removeAttribute("style");
      currelem.style.display = "none";
      photoBtn.classList.remove("active");
    } else {
      videoBtn.classList.remove("active");
      photoBtn.classList.add("active");
      photoCardSec.style.paddingTop = "4rem";
      currelem.style.display = "block";
      cinCardSec.removeAttribute("style");
      cinCard[index].removeAttribute("style");
    }
  });
});



// SLIDE JS

let currIndex = 0;

let currentSlide = document.querySelectorAll(".slide");

let currentDots = document.querySelectorAll(".dot");

// Prev & Next Button Function

let slideLength = currentSlide.length - 1;

// Prev Function

const prevFunc = document.querySelector(".prev-arrow");

prevFunc.addEventListener("click", prevImgFunc);

function prevImgFunc() {
  if (currIndex === 0) {
    carousal(slideLength);
    currIndex = slideLength;
  } else {
    currIndex -= 1;
    carousal(currIndex);
  }
}

// Next Function

const nextFunc = document.querySelector(".next-arrow");

nextFunc.addEventListener("click", nextImgFunc);

function nextImgFunc() {
  if (currIndex === slideLength) {
    carousal(0);
    currIndex = 0;
  } else {
    currIndex += 1;
    // currIndex++;
    carousal(currIndex);
  }
}

carousal(currIndex);

function carousal(index) {

  // Display all Slide Image to None Before Block Current Slide Image

  for (img of currentSlide) {
    img.style.display = "none";
    img.classList.remove("active");
  }

  // Display all Dots to None Before Block Current Image

  for (dots of currentDots) {
    dots.classList.remove("active");
  }

  // Display Block Current Slide

  currentSlide[index].style.display = "block";
  currentSlide[index].classList.add("active");
  currentDots[index].classList.add("active");
}

// Auto Image Slide Show

const slideContainer = document.querySelector(".slide-container");

function autoSlideShow() {
  stopAutoSlide = setInterval(nextImgFunc, 3000);
}

slideContainer.addEventListener("mouseout", autoSlideShow);

function stopSlide() {
  clearInterval(stopAutoSlide);
}

slideContainer.addEventListener("mouseover", stopSlide);





// SCROLL ANIMATION (REVEAL ELEMENT ON SCROLL)

let revealElem = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  for (let i = 0; i < revealElem.length; i++) {
    let windowHeight = window.innerHeight;
    let revealScrollHeight = revealElem[i].getBoundingClientRect().top;

    if (revealScrollHeight < windowHeight) {
      revealElem[i].classList.add("revealAnimation");
    } else {
      revealElem[i].classList.remove("revealAnimation");
    }
  }
});







