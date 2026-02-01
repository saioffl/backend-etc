const ip = document.querySelector('.ip')
const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const value = ip.value;
    const list = document.querySelectorAll('.lists li')
    list.forEach(li => {
        if (li.textContent === value) {
            li.remove()
        }
    });
    ip.value = ''

})