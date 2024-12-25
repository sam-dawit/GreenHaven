const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const closeMenuButton = document.querySelector(".close-menu");

// Toggle menu visibility
hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

// Close menu when "Close" button is clicked
closeMenuButton.addEventListener("click", () => {
    hamMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");
});

// Close menu when clicking outside of it
document.addEventListener("click", (event) => {
    const isClickInsideMenu =
        offScreenMenu.contains(event.target) || hamMenu.contains(event.target);
    if (!isClickInsideMenu) {
        hamMenu.classList.remove("active");
        offScreenMenu.classList.remove("active");
    }
});
