let list = document.querySelector(".mobile-list");
let burger = document.querySelector(".burger-icon img");
let overlay = document.querySelector(".overlay");

burger.addEventListener("click", () => {
  if (burger.getAttribute("src") === "./images/icon-hamburger.svg") {
    burger.setAttribute("src", "./images/icon-close.svg");
    list.style.left = "50%";
    overlay.style.top = "0";
  } else {
    burger.setAttribute("src", "./images/icon-hamburger.svg");
    list.style.left = "-100%";
    overlay.style.top = "-100%";
  }
});
