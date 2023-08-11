const moveTop = document.querySelector('.top')

window.addEventListener('scroll', () => {
    var y = window.scrollY;
    if (y >= 600) {
        moveTop.classList.add('active')
    }
    else {
        moveTop.classList.remove('active')
    }
})

