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
    loop: false,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-btnnext',
      prevEl: '.swiper-btnprev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })



ymaps.ready(function () {
  let myMap = new ymaps.Map('map', {
    center: [59.916933, 30.280519],
    zoom: 17,
    controls: [],
  },
  {
    suppressMapOpenBlock: true,
    searchControlProvider: 'yandex#search'
  }),

  // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Собственный значок метки',
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: '../img/icon.png',
      // Размеры метки.
      iconImageSize: [38,49],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38]
  });

  myMap.behaviors.disable('scrollZoom'),
  myMap.geoObjects.add(myPlacemark);

  myMap.controls.add('zoomControl', {
    size: "large"
  });
});





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

const tabsArray = Array.prototype.slice.call(tabsWrap.children);

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



