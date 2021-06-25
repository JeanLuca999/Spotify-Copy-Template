const menuButton = document.querySelector('.header__menu')
const ul = document.querySelector('.header__ul')

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('menu--active')
    ul.classList.toggle('ul--active')
})