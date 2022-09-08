const tabs = document.querySelector('.tabs__list');
const gallSlider = document.querySelectorAll('.gallery__block');

tabs.addEventListener('click', function (e) {
	if (e.target.classList.contains('tabs__item')) {
		this.querySelectorAll('.tabs__item').forEach(element => element.classList.remove('active'));
		e.target.classList.add('active');
	}

	gallSlider.forEach(element => element.classList.remove('show'));
	const tabIndex = e.target.dataset.tab;
	const thisSlider = document.querySelector(tabIndex);
	thisSlider.classList.add('show');
});