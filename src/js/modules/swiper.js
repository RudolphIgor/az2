
	//Slyder Review
	const swiper = new Swiper('.review__swiper',{
		loop: true,
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 13,
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
				centeredSlides: true,
				slidesPerGroup: 1,
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

	//Slider Gallery
	// const swiperGallery = new Swiper('.gallery__swiper', {
	// 	spaceBetween: 25,
	// 	slidesPerView: 3,
	// 	grid: {
	// 		rows: 2,
	// 		fill: 'row',
	// 	},
	// 	// slidesPerColumnFill: 'column',
	// 	autoHeight: false,
	// 	// And if we need scrollbar
	// 	scrollbar: {
	// 	  el: '.swiper-scrollbar',
	// 	},
	//   });


	const swiperGallery = new Swiper('.gallery__swiper', {
		// Optional parameters
		spaceBetween: 25,
		breakpoints: {
			320: {
				autoHeight: true,
				loop: true,
				slidesPerView: 1.25,
				slidesPerGroup: 1,
			},
			768: {
				slidesPerView: 1.45,
			},
			800: {
				slidesPerView: 1.8,
			},
			992: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				autoHeight: false,
				loop: false,
				grid: {
					rows: 2,
					fill: 'row',
				},
				
			},
			
		},
	  
		// If we need pagination
	  
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		},
	  });
