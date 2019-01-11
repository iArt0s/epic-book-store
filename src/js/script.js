import addToPage from './modules/addToPage.js';
// import data from './modules/booksData.js';
import bookCardTemplate from './modules/bookCardTemplate.js';
import sendRequest from './modules/sendRequest.js';
import Swiper from "../../node_modules/swiper/dist/js/swiper.min.js";


// let burger = document.querySelector(".main-nav__burger");
// let menu = document.querySelector(".main-nav__toggle");
let menu = document.querySelector("#menu");
let burger = document.querySelector(".main-nav__icon--toggle");
menu.classList.add('hide');

burger.addEventListener('click', (e) => {
  menu.classList.toggle('hide');
  e.target.classList.toggle('is-active')
})


var carousel = new Swiper ('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })



// // Функция ymaps.ready() будет вызвана, когда
//     // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
//     ymaps.ready(init);
//     function init(){
//         // Создание карты.
//         var myMap = new ymaps.Map("map", {
//             // Координаты центра карты.
//             // Порядок по умолчанию: «широта, долгота».
//             // Чтобы не определять координаты центра карты вручную,
//             // воспользуйтесь инструментом Определение координат.
//             center: [55.76, 37.64],
//             // Уровень масштабирования. Допустимые значения:
//             // от 0 (весь мир) до 19.
//             zoom: 7
//         });
//     }



function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};



//ajax obj
const data1 = {
	page : 1,
	perPage: 8,
	type: ''
};

const wrap = document.querySelector(bookCardTemplate.wrap);

if (wrap) {
	const dataAjax = createDataAjax();

	sendRequest(dataAjax, function(responseObj) {

		if (wrap.children) {
			wrap.innerHTML = '';
		}

		addToPage(responseObj.items, bookCardTemplate);
	});
}


//listener
const tabsWrap = document.querySelector('.j-catalog__tabs');

const tabsArray = Array.from(tabsWrap.children);

tabsArray.forEach(function(tab) {
	const link = tab.firstElementChild;

	link.addEventListener('click', function(event) {
		event.preventDefault();
		data1.type = event.target.dataset.type;

		const dataAjax = createDataAjax();

		sendRequest(dataAjax, function(responseObj) {

			if (wrap.children) {
				wrap.innerHTML = '';
			}

			addToPage(responseObj.items, bookCardTemplate);
		});
	});
});

// create url get
function createDataAjax() {

	if (window.matchMedia("(min-width: 768px)").matches) {
		data1.perPage = 8;
	} else {
		data1.perPage = 3;
	}

	return  `https://api.do-epixx.ru/htmlpro/bookstore/books/get/${data1.page}/${data1.perPage}/${data1.type}`;
}



