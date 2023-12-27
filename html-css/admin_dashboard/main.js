import { orders } from "./orders.js";

const sideMenu = document.querySelector('aside');
const sideMenuAllLi = document.querySelectorAll('.sidebar a');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler')

// active menu li 
sideMenuAllLi.forEach(li => {
    li.addEventListener('click', (ev) => {
        ev.preventDefault();
        
        sideMenuAllLi.forEach(li => {
            li.classList.remove('active');
        })

        li.classList.add('active')
    })
})

// show siderbar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

//change theme 
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// fill orders in table
orders.forEach( order => {
    const tr = document.createElement('tr');
    const trContent = `<td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping.toLowerCase() === 'declined' ? 'danger' : order.shipping.toLowerCase() === 'pending'  ? 'warning' : order.shipping.toLowerCase() === 'processing'  ? 'primary' : 'success'}">${order.shipping}</td>
                        <td class="primary">Details</td>`;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').append(tr)
})