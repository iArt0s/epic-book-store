import addToPage from './modules/addToPage.js';
// import data from './modules/booksData.js';
import bookCardTemplate from './modules/bookCardTemplate.js';
import sendRequest from './modules/sendRequest.js';


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



