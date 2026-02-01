const ip = document.querySelector('.ip')
const btn = document.querySelector('.btn')
const list = document.querySelectorAll('.lists')


btn.addEventListener('click' , (e)=>{
    list.forEach(li => {
        if(li.textContent === value) {
            li.remove()
        }
    });

    ip.value = ''
})