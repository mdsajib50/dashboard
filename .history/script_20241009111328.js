const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})