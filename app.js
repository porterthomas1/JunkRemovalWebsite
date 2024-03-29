const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

var scrollTimeout;
var header = document.getElementById("main-header");
var headerScrolled = document.getElementById("main-header.scrolled");
var logoContainer = document.getElementById("logo-container");

window.addEventListener("scroll", function () {
  clearTimeout(scrollTimeout);

  // Add a small delay before applying the transition
  scrollTimeout = setTimeout(function () {
    // Calculate the scroll position threshold
    var scrollThreshold = headerScrolled;

    // Check if the scroll position exceeds the threshold
    if (window.scrollY > scrollThreshold) {
      header.classList.add("scrolled");
      logoContainer.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
      logoContainer.classList.remove("scrolled");
    }
  }, 30); // Adjust the delay as needed
});
