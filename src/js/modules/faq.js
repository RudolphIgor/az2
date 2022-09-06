export function swipe () {
	const btn = document.querySelector('.btn_faq');
	const btn_off = document.querySelector('.btn_faq-off');
	const content = document.querySelector('.content__text');
	content.style.maxHeight = '450px';
	btn.addEventListener('click', () => {
		content.style.maxHeight = content.scrollHeight + 'px';
		btn.classList.add('press');
		btn_off.classList.add('active');
	})
	btn_off.addEventListener('click', () => {
		content.style.maxHeight = '450px';
		btn_off.classList.remove('active');
		btn.classList.remove('press');
	})
}