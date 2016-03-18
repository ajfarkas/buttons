function $(el) { return document.querySelector(el) }
function $$(el) { return document.querySelectorAll(el) }

var dropBtn = $('.drop')
function dropTheButton(e) {
  e.target.dataset.clicks++
}
dropBtn.addEventListener('click', dropTheButton)