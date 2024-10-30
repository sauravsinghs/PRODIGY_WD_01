// Select the navbar
const navbar = document.getElementById("navbar");

// Add a scroll event listener
window.addEventListener("scroll", () => {
  // Check if the page has scrolled down 50px or more
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
