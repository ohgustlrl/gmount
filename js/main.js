import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
const listBtnEls = document.querySelectorAll('[class*=carousel-item]');
const contentsItem = document.querySelectorAll('[class=item-contents');


for(let i=0; i < listBtnEls.length; i++) {
  listBtnEls[i].addEventListener('click', function() {
    contentsItem[i].classList.add('on');
  })
}