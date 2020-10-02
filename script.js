var nav_menu = document.getElementById('menu');
var toggle_menu = document.getElementById('toggle');
var section = document.getElementById('section');
var footer = document.getElementById('footer');
var img_toggle = document.getElementById('img-toggle');
var windowSize = window.matchMedia("(min-width: 902px)");

const toggle_check = () => {
    if (toggle_menu.checked) {
        nav_menu.style.display = 'block';
        section.style.display = 'none';
        footer.style.display = 'none';
        img_toggle.src = './images/icon-close.svg';
    } else {
        nav_menu.style.display = 'none';
        section.style.display = 'block';
        footer.style.display = 'block';
        img_toggle.src = './images/icon-hamburger.svg';
    }
}

window.addEventListener('resize', check_resize => {
    if (windowSize.matches && toggle_menu.checked) {
        nav_menu.style.display = 'block';
        section.style.display = 'block';
        footer.style.display = 'block';
        img_toggle.src = './images/icon-close.svg';
    } else if (windowSize.matches && !toggle_menu.checked) {
        nav_menu.style.display = 'block';
        section.style.display = 'block';
        footer.style.display = 'block';
        img_toggle.src = './images/icon-hamburger.svg';
    } else if (!windowSize.matches && toggle_menu.checked) {
        nav_menu.style.display = 'block';
        section.style.display = 'none';
        footer.style.display = 'none';
        img_toggle.src = './images/icon-close.svg';
    } else {
        nav_menu.style.display = 'none';
        section.style.display = 'block';
        footer.style.display = 'block';
        img_toggle.src = './images/icon-hamburger.svg';
    }
});