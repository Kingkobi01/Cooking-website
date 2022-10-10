window.addEventListener("scroll", () => {
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0);
})
const menuToggle = document.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
    const nav = document.querySelector(".navigation")
    nav.classList.toggle("active")
    menuToggle.classList.toggle("active")
})