function changeMode() {
    changeClass();
    changeText();
}

function changeText() {
    if (h1.classList.contains('dark-mode')) {
        h1.innerHTML = "Dark Mode ON"
        button.innerHTML = "Light Mode"
    }
    else {
        h1.innerHTML = "Light Mode ON"
        button.innerHTML = 'Dark Mode'
    }
}

function changeClass() {
    body.classList.toggle('dark-mode')
    button.classList.toggle('dark-mode')
    footer.classList.toggle('dark-mode')
    h1.classList.toggle('dark-mode')
}

const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);