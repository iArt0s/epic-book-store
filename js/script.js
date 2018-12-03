function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  console.log('DOM ready');
});
<script>
    const data = {
      books:[
     {
      src: 'img/book-lateralnaya-logika.jpg',
      title: 'Латеральная логика',
      bookDescr: 'Головоломный путь к нестандартному мышлению',
      bookPrice: '500 ₽'
      // href:
     },{
      src: 'img/book-putevoditel-po-lzhi.jpg',
      title: 'Путеводитель по лжи',
      bookDescr: 'Критическое мышление в эпоху постправды',
      bookPrice: '630 ₽'
      // href:
     },{
      src: 'img/book-dao-fiziki.jpg',
      title: 'Дао физики',
      bookDescr: 'Исследование параллелей между современной физикой и восточной философией',
      bookPrice: '560 ₽'
      // href:
     },{
      src: 'img/book-ne-ochevidno.jpg',
      title: 'Не очевидно',
      bookDescr: 'Как выявлять тренды раньше других',
      bookPrice: '365 ₽'
      // href:
     },{
      src: 'img/book-superpotrebiteli.jpg',
      title: 'Суперпотребители',
      bookDescr: 'Кто это и почему они так важны для вашего бизнеса',
      bookPrice: '500 ₽'
      // href:
     },{
      src: '/img/book-social-media-marketing.jpg',
      title: 'Маркетинг в социальных сетях',
      bookDescr: '',
      bookPrice: '630 ₽'
      // href:
     },{
      src: 'img/book-pravilnyij-vyibor.jpg',
      title: 'Правильный выбор',
      bookDescr: 'Практическое руководство по принятию взвешенных решений',
      bookPrice: '560 ₽'
      // href:
     },{
      src: 'img/book-glavnoe-v-istorii-iskusstv.jpg',
      title: 'Главное в истории искусств',
      bookDescr: 'Ключевые работы, темы, направления, техники',
      bookPrice: '365 ₽'
      // href:
     }
      ]
    };


const cardsWrap = document.querySelector('.j-catalog__list');



function createCard(item) {
  const card = document.createElement('div');
  card.classList.add('catalog__list');

  card.innerHTML = `<article class="j-product-card-mini">
          <a href="" class="product-card-mini__img-wrap"><img src="${item.src}" alt="" class="product-card-mini__img"></a>
          <h2 class="product-card-mini__title"><a href="">${item.title}</a></h2>
          <p class="product-card-mini__descr">${item.bookDescr}</p>
          <div class="product-card-mini__price">${item.bookPrice}</div>
        </article>`
        ;

  return card;
}


function insertElements(data, wrap) {
  const booksArr = data.books;

  booksArr.forEach((item) => {
    const card = createCard(item);

    wrap.appendChild(card);
  })
}

if (cardsWrap) {
  insertElements(data, cardsWrap);
}



  </script>
