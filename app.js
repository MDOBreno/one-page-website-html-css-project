



function testeJS(a){



	return ("Hello " + a);
}







const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		if (item.innerHTML == "Testar JS") {
			console.log(item.innerHTML);
			var print = testeJS("World");
			console.log(print);
		} else {
			//hamburger.classList.toggle('active');
			//mobile_menu.classList.toggle('active');
		}
	});
});