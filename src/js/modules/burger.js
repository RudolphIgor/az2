export function iconsactive() {
	const iconmenu = document.querySelector('.menu__icon');
	if (iconmenu) {
		const menubody = document.querySelector('.menu__body');
		const headerContainer = document.querySelector('.header__container');
		const linedecor = document.querySelector('.line-decore');
		iconmenu.addEventListener('click', function (e) {
			iconmenu.classList.toggle('menu__icon_active');
			menubody.classList.toggle('menu__body_active');
			headerContainer.classList.toggle('header__container_active');
			linedecor.classList.toggle('line-decore_active');
		});
	}
} 