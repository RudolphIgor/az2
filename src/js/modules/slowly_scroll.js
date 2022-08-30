const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
const icon = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu__body');
const header = document.querySelector('.header__container');

export function slScroll() {
	console.log(menuLinks);
	if (menuLinks.length > 0) {
		menuLinks.forEach(element => {
			element.addEventListener('click', onMenuLinkClick)
		});
	}
}

function onMenuLinkClick(e) {
	const menuLink = e.target;
	if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
		const gotoBlock = document.querySelector(menuLink.dataset.goto);
		const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - (document.querySelector('header').offsetHeight-100); //300 - Величина паддинга раскрывающейся под меню в шапке
		
		window.scroll({
			top:gotoBlockValue,
			behavior: "smooth"
		})
		e.preventDefault();
		icon.classList.remove('menu__icon_active');
		menu.classList.remove('menu__body_active');
		header.classList.remove('header__container_active');
	}
}