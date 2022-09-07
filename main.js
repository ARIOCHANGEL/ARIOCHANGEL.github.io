let burger = document.querySelector('#burger');
let menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
				menu.classList.toggle('abierto');
				burger.classList.toggle('abierto');
});

