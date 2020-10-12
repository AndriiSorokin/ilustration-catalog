import fetch from './fetch.js'
import refs from './refs.js'
import template from '../template/template.hbs'

fetch.getFetch()
  .then((data => render(data.hits)))

function render(data) {
  const item = template(data);
  refs.galleryList.insertAdjacentHTML('beforeend', item)
  }