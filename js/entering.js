var logo = document.querySelector('.logo')
var enter = document.querySelector('.enter_box')

enter.addEventListener('mouseover', (event) => {
    logo.style.opacity = "0"
    enter.style.opacity = "1"
})
enter.addEventListener('mouseleave', (event) => {
    logo.style.opacity = "1"
    enter.style.opacity = "0"
})

