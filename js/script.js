import addToPage from './modules/addToPage.js';
import data from './modules/booksData.js';
import bookCardTemplate from './modules/bookCardTemplate.js';

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
	
  // console.log('DOM ready');
});

const data1 = {
	page : 1,
	perPage: 8,
	type: ''
};

	const tabsWrap = document.querySelector('.j-catalog__tabs');

	const tabsArray = Array.from(tabsWrap.children);

	tabsArray.forEach(function(tab) {
		const link = tab.firstElementChild;
		link.addEventListener('click',function(event){
		event.preventDefault();
		data1.type = event.target.dataset.type;
		

		if (window.matchMedia("(min-width: 768px)").matches) {
			data1.perPage = 8;
		} else {
			data1.perPage = 3;
		}


		const dataAjax = `https://api.do-epixx.ru/htmlpro/bookstore/books/get/${data1.page}/${data1.perPage}/${data1.type}`;
		
		sendRequest(dataAjax);
		});
	});

	function sendRequest(data) {
		let xhr = new XMLHttpRequest;

		xhr.open('GET',data);
		xhr.send();

		xhr.onreadystatechange = function() {
			if(xhr.readyState === 4 && xhr.status ===200) {
			const request = JSON.parse(xhr.responseText);

			console.log(request);

			const wrap = document.querySelector(bookCardTemplate.wrap);

			if (wrap.children) {
				wrap.innerHTML = '';
			}

			if (document.querySelector(bookCardTemplate.wrap)) {
				addToPage(request.items, bookCardTemplate)
			}


			} else {
				console.log(xhr.responseText);
				console.log('ответ: ${xhr.readyState}')
			}
		}
	}