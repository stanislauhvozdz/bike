let navigationToggle = document.querySelector('.navigation__toggle');
let navigationList = document.querySelector('.navigation__list');
let pageBody = document.querySelector('.page__body');

navigationToggle.addEventListener('click', (event) => {
  event.preventDefault();

  navigationToggle.classList.toggle('is-active');
  navigationList.classList.toggle('is-active');
  pageBody.classList.toggle('_no-scroll');
});
