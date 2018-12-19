import createElement from './createElement.js';


function addToPage(array, template) {

  array.forEach((item) => {
    const card = createElement(item, template);

    document.querySelector(template.wrap).appendChild(card);
  })
}

export default addToPage;
