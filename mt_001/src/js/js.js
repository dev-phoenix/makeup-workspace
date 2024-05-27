
// import * as flsFunctions from "./modules/functions.js";
import Swiper from 'swiper';
import {
	Navigation,
	// EffectFade,
	// Pagination,
	// Thumbs,
	// Controller,
	FreeMode//,
	// Scrollbar,
	// A11y,
	// Mousewheel
} from 'swiper';
import AOS from 'aos';
//import burger from './modules/burger.mjs';
//= modules/burger.js

// flsFunctions.isWebp();

// https://www.youtube.com/watch?v=RfNUJXY3uGg&list=PLu0pRheOFLkEmnlzsKsEjapldwlXd18Ba&index=2
const swiper1 = (log) => {
	log = !!log
	var sw = new Swiper('.auctions-slider', {
		// enabled: false, 
		loop: true, // Включить бесконечный режим
		navigation: {
			nextEl: '.swiper-button-next1', //
			prevEl: '.swiper-button-prev1' // Включить стрелочки
		},
		// modules: [Navigation, EffectFade, Pagination], // Модули, которые будут использоваться
		modules: [Navigation, FreeMode], // Модули, которые будут использоваться
		autoHeight: true, // Автовысота
		speed: 500, // Скорость прокрутки слайдера
		slidesPerView: 1, // Количество слайдов, которые будут видны
		spaceBetween: 15, // 
		// freeMode: true, // что бы курсор не цеплялся за слайды
		freeMode: false, // что бы курсор не цеплялся за слайды
		grabCursor: true, // что бы менялся курсор
		breakpoints: {
			1300: {
				spaceBetween: 42,
				slidesPerView: 2.75
			}
			,
			1100: {
				spaceBetween: 15, // 
				slidesPerView: 2.75
			},
			650: {
				spaceBetween: 15,
				slidesPerView: 2
			}
		}

		// // Default parameters
		// slidesPerView: 1,
		// spaceBetween: 10,
		// // Responsive breakpoints
		// breakpoints: {
		// 	// when window width is >= 320px
		// 	320: {
		// 	slidesPerView: 2,
		// 	spaceBetween: 20
		// 	},
		// 	// when window width is >= 480px
		// 	480: {
		// 	slidesPerView: 3,
		// 	spaceBetween: 30
		// 	},
		// 	// when window width is >= 640px
		// 	640: {
		// 	slidesPerView: 4,
		// 	spaceBetween: 40
		// 	}
		// }
	});
	// if (log) console.log(sw)
	return sw
}
const swiper2 = (log) => {
	log = !!log
	var sw = new Swiper('.collections-slider', {
		loop: false, // Включить бесконечный режим
		navigation: {
			nextEl: '.swiper-button-next2', //
			prevEl: '.swiper-button-prev2' // Включить стрелочки
		},
		// modules: [Navigation, EffectFade, Pagination], // Модули, которые будут использоваться
		modules: [Navigation, FreeMode], // Модули, которые будут использоваться
		autoHeight: true, // Автовысота
		speed: 500, // Скорость прокрутки слайдера
		slidesPerView: 3, // Количество слайдов, которые будут видны
		spaceBetween: 15, // 
		freeMode: true, // что бы курсор не цеплялся за слайды
		grabCursor: true, // что бы менялся курсор
		breakpoints: {
			1300: {
				spaceBetween: 42,
				slidesPerView: 2.6
			}
			,
			1100: {
				spaceBetween: 15, // 
				slidesPerView: 2.6
			},
			650: {
				spaceBetween: 15,
				slidesPerView: 2
			}
		}
	});
	if (log) console.log(sw)
	return sw
}
const swiper3 = (log) => {
	log = !!log
	var sw = new Swiper('.categories-slider', {
		loop: false, // Включить бесконечный режим
		// navigation: {
		// 	nextEl: '.swiper-button-next2', //
		// 	prevEl: '.swiper-button-prev2' // Включить стрелочки
		// },
		// modules: [Navigation, EffectFade, Pagination], // Модули, которые будут использоваться
		modules: [Navigation, FreeMode], // Модули, которые будут использоваться
		autoHeight: true, // Автовысота
		speed: 500, // Скорость прокрутки слайдера
		slidesPerView: 1, // Количество слайдов, которые будут видны
		spaceBetween: 15, // 
		freeMode: true, // что бы курсор не цеплялся за слайды
		grabCursor: true, // что бы менялся курсор
		breakpoints: {
			1300: {
				spaceBetween: 42,
				slidesPerView: 3.25
			}
			,
			1100: {
				spaceBetween: 15, // 
				slidesPerView: 2.75
			},
			650: {
				spaceBetween: 15,
				slidesPerView: 2
			}
		}
	});
	if (log) console.log(sw)
	return sw
}


// разворачивание слайдера
function detectDevice(swiper){
	console.log('swiper')
	if(window.innerWidth < 600 ){
		console.log('disable')
		for (let i = 0; i < 3; i++){
			document.querySelectorAll('.auctions-slide')[i].style.display = 'block';
			document.querySelectorAll('.collections-slide')[i].style.display = 'block';
			document.querySelectorAll('.categories-slider .auctions-slide')[i].style.display = 'block';
		}
	}else{
		console.log('enable')
		swiper();
	}
}

// разворачивание слайдера
function detectDevice_v1(log){
	let sw = {}
	sw.sw_1 = null;
	sw.sw_2 = null;
	sw.sw_3 = null;
	if(log){
		console.log('init swiper')
		console.log(!!Swiper)
		console.log(Swiper)
		console.log(sw.sw_3 instanceof Swiper)
	}
	function swiper_resize(log){
		// if (!(log instanceof Boolean)) log = false
		log = !!log
		if (log) console.log('log', log)
		if (log) {
			let swl_1 = "sw_1 is instance of Swiper"
			let swl_2 = "sw_2 is instance of Swiper"
			let swl_3 = "sw_3 is instance of Swiper"
			if(sw.sw_1 instanceof Swiper) {} else { swl_1 = swl_1.replace('is','is not') }
			if(sw.sw_2 instanceof Swiper) {} else { swl_2 = swl_2.replace('is','is not') }
			if(sw.sw_3 instanceof Swiper) {} else { swl_3 = swl_3.replace('is','is not') }
			console.log(swl_1)
			console.log(swl_2)
			console.log(swl_3)
		}
		if (log) console.log('window Width', window.innerWidth)
		if(window.innerWidth <= 600 ){
			if (log) console.log('sw_3 instanceof Swiper', sw.sw_3 instanceof Swiper)
			if(sw.sw_1 instanceof Swiper) {sw.sw_1.destroy(); delete sw.sw_1;
				if(log)console.log('sw_1',sw.sw_1)}
			if(sw.sw_2 instanceof Swiper) {sw.sw_2.destroy(); delete sw.sw_2;}
			if(sw.sw_3 instanceof Swiper) {sw.sw_3.destroy(); delete sw.sw_3;}
			if (log) console.log('swiper_resize disable')
		}else{
			if(!(sw.sw_1 instanceof Swiper)) sw.sw_1 = swiper1(log);
			if(!(sw.sw_2 instanceof Swiper)) sw.sw_2 = swiper2(log);
			if(!(sw.sw_3 instanceof Swiper)) sw.sw_3 = swiper3(log);
			if (log) console.log('swiper_resize enable')
		}
		if (log) console.log('sw', sw)
	}
	swiper_resize(log)
	window.addEventListener('resize',swiper_resize.bind(null,log))
}

let log = true;
// log = false;
detectDevice_v1(log);
// detectDevice(swiper1);
// detectDevice(swiper2);
// detectDevice(swiper3);

// https://www.youtube.com/watch?v=o3HuhN_9iGc&list=PLu0pRheOFLkEmnlzsKsEjapldwlXd18Ba&index=4
// # Ссылка на гитхаб AOS: https://github.com/michalsnik/aos
AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// console.log('js 1')
// console.log('js 2')
// console.log('js 3')
// // alert('hi 2')
// //= components/js3.js
// //= components/js2.js
// //= components/js2.js


//= modules/grid-tool.js