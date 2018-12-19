const bookCardTemplate = {

	wrap: '.j-catalog__list' ,
	tag: 'div' ,
	tagClass: 'product-card-mini' ,
	setContent: function (item) {
		return `<article class="j-product-card-mini">
          <a href="" class="product-card-mini__img-wrap">
          	<img src="img/books/${item.uri}.png" alt="" class="product-card-mini__img">
          </a>
          <h2 class="product-card-mini__title"><a href="">${item.name}</a></h2>
          <p class="product-card-mini__descr">${item.desc}</p>
          <div class="product-card-mini__price">${item.price}</div>
        </article>`
	}
}

export default bookCardTemplate;