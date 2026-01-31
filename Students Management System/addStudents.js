const btn = document.querySelector('.btn')
const ip = document.querySelector('.ip')
const list = document.querySelector('.list')

btn.addEventListener('click', (e) => {
    const li = document.createElement('li')
    li.textContent = ip.value;
    list.appendChild(li)
})
