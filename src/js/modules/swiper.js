
	const swiper = new Swiper('.swiper',{
		loop: true,
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 13,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next-unique',
			prevEl: '.swiper-button-prev-unique',
		},
	});

	
