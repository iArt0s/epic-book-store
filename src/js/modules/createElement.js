function createElement(item, template) {
  const card = document.createElement(template.tag);
  card.classList.add(template.tagClass);

  card.innerHTML = template.setContent(item);

  return card;
}

export default createElement;