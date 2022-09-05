export function swipe () {
	const btn = document.querySelector('.btn_faq');
	const content = document.querySelector('.content__text');
	content.style.maxHeight = '450px';
	btn.addEventListener('click', () => {
		content.style.maxHeight = content.scrollHeight + 'px';
	})
}