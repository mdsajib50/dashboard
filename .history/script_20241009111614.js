const sideMenu = document.querySelector("aside");
const menuBtn = document.get("#menu-btn");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})