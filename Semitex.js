
const Swiper = new Swiper('.reviews-swiper', {
	slidesPerView: 1,
	spaceBetween: 10,
	speed: 400,
	preventClicks: true,
	noSwiping: true,
	freeMode: false,
	navigation: {
		nextEl: ".reviews-swiper .swiper-button-next",
		prevEl: ".reviews-swiper .swiper-button-prev",
   },
	breakpoints: {
		550: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		950: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	slideClass: 'swiper-slide',
	wrapperClass: 'swiper-wrapper',
	observer: true,
	observeParents: true,
	slidesPerView: 2,
	loop: true,
});