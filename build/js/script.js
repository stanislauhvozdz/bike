;(function () {
  // бургер
  let navigationToggle = document.querySelector('.navigation__toggle');
  let navigationList = document.querySelector('.navigation__list');
  let pageBody = document.querySelector('.page__body');

  navigationList.classList.remove('navigation__list--no-js')

  navigationToggle.addEventListener('click', (event) => {
    event.preventDefault();

    navigationToggle.classList.toggle('is-active');
    navigationList.classList.toggle('is-active');
    pageBody.classList.toggle('_no-scroll');
  });
})();

;(function () {
  // Видио плеер
  let buttonPlay = document.querySelector('.video__button-play');
  let video = document.querySelector('.video__player video')

  buttonPlay.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      buttonPlay.classList.add('play')
    } else {
      video.pause();
      buttonPlay.classList.remove('play')
    }
  });
})();
