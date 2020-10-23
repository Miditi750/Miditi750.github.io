//кнопка меню
let menuToggle = document.querySelector('#menu-toggle');
//меню
let menu = document.querySelector('.sidebar')
//отслеживаем клик
menuToggle.addEventListener('click', function(event) {
	//отменяем стандартное поведение ссылки
	event.preventDefault();
	//вешаем класс на меню, когда кликнули по кнопке меню
	menu.classList.toggle('visible');
})