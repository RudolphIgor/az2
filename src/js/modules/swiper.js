
	const swiper = new Swiper('.swiper',{
		loop: true,
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 13,
		// If we need pagination
		// pagination: {
		// 	el: '.swiper-pagination',
		// 	clickable: true,
		// },
		// Navigation arrows
		// navigation: {
		// 	enable: true,
		// 	nextEl: '.swiper-button-next-unique',
		// 	prevEl: '.swiper-button-prev-unique',
			
		// },
		breakpoints: {
			320: {
				slidesPerView: 1,
				centeredSlides: true,
				slidesPerGroup: 1,
				scrollbar: {
					el: '.swiper-scrollbar',
					dragSize: '65px',
					draggable: true,
					enabled: true,
				},
				
			},
			768: {
				slidesPerView: 2,
				scrollbar: {
					el: '.swiper-scrollbar',
					dragSize: '142px',
					draggable: true,
					enabled: true,
				}
			},
			992: {
				slidesPerView: 3,
				scrollbar: {
					enabled: false,
				},
				pagination: {
				el: '.swiper-pagination',
				clickable: true,
				enabled: true,
				},
			},
		},
	});

	
