// Your code goes here
const rainbow = ["red", "orange", "yellow", "green", "blue", "purple"];
const prefixes = [
  "Fun",
  "Bus",
  "Sus",
  "Smol",
  "Big",
  "Weird",
  "Bad",
  "Micro",
  "Magic School",
];
let iRainbow = 0;
//**(1, load)**background and text change color when window loads
window.addEventListener("load", (e) => {
  document.body.style = "background:purple";
  document.querySelector(".main-navigation").style = "z-index: 3";
  Array.from(document.querySelectorAll("p")).forEach(
    (element) => (element.style = "color:white")
  );
  Array.from(document.querySelectorAll("h2")).forEach(
    (element) => (element.style = "color:white")
  );
  Array.from(document.querySelectorAll("h4")).forEach(
    (element) => (element.style = "color:white")
  );
  document.querySelector(".footer p").style = "color:black";
});

//**(2 & 3, mouseenter & mouseleave)**nav links change scale when moused over
Array.from(document.querySelectorAll(".nav-link")).forEach((element) => {
  element.addEventListener("mouseenter", (e) => {
    e.target.style = "transition: transform 1s; transform: scale(1.2)";
    e.stopImmediatePropagation();
  });
  element.addEventListener("mouseleave", (e) => {
    e.target.style = "transition: transform 1s; transform: scale(1)";
    e.stopImmediatePropagation();
  });
});

//**(4, click)**sign me up buttons get removed when clicked
Array.from(document.querySelectorAll(".btn")).forEach((element) => {
  element.addEventListener("click", (e) => {
    element.remove();
    e.stopImmediatePropagation();
  });
});

//**(5, dbclick)**images rescale when double clicked
Array.from(document.querySelectorAll("img")).forEach((element) => {
  element.addEventListener("dblclick", (e) => {
    element.style = "transition: transform 1s; transform: scale(1.2)";
    setTimeout(() => {
      element.style = "transition: transform 1s; transform: scale(1)";
    }, 3000);
    e.stopImmediatePropagation();
  });
});

//**(6, scroll)**logo header changes color on scroll
let logoHeading = document.querySelector(".logo-heading");
let colorDebounce = false;
document.addEventListener("scroll", (e) => {
  if (!colorDebounce) {
    colorDebounce = true;
    iRainbow = iRainbow < rainbow.length - 1 ? iRainbow + 1 : 0;
    logoHeading.style = `animation-delay: 0s; transition: color 0.1s; color: ${rainbow[iRainbow]}`;
    setTimeout(() => {
      colorDebounce = false;
    }, 100);
  }
});

//**(7, transitionstart)**logo header text changes to temporary text
logoHeading.addEventListener("transitionstart", (e) => {
  e.target.textContent = "Scrolling";
});

//**(8, transitionend)**change logo header text when scrolling ends
let textDebounce = false;

function changeText() {
  if (!textDebounce) {
    textDebounce = true;
    logoHeading.textContent = `${
      prefixes[Math.floor(Math.random() * prefixes.length)]
    } Bus`;
    textDebounce = false;
  }
}

logoHeading.addEventListener("transitionend", changeText);

logoHeading.addEventListener("transitionend", changeText);

//**(9, fullscreenchange)**change logo header text on screensize change
window.addEventListener("fullscreenchange", changeText);

//**(10, resize)**change logo header text on fullscreen toggle
window.addEventListener("resize", changeText);
