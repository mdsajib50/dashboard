const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle("dark-theme")

    themeToggler.querySelector("span:nth-child(1)").classList.toggle('active')

    themeToggler.querySelector("span:nth-child(2)").classList.toggle('active')
})

orders.forEach(order => {
    const tr = document.createElement('tr');

    const trContent = `
                            <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>Due</td>
                            <td class="warning">Pending</td>
                            <td class="primary">Details</td>
    `
})
