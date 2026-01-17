const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('#nav');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.textContent = navigation.classList.contains('open') ? '✖' : '☰';
});

document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;