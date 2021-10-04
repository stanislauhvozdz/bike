let pageBody = document.querySelector('.page__body');

try {
  // бургер + меню
  let navigationToggle = document.querySelector('.navigation__toggle');
  navigationToggle.classList.remove('navigation__toggle--no-js');

  let navigationList = document.querySelector('.navigation__list');
  navigationList.classList.remove('navigation__list--no-js')

  navigationToggle.addEventListener('click', (event) => {
    event.preventDefault();

    navigationToggle.classList.toggle('is-active');
    navigationList.classList.toggle('is-active');
    pageBody.classList.toggle('_no-scroll');
  });
} catch {};


let navigationLinks = document.querySelectorAll('.navigation__link');
let navigationList = document.querySelector('.navigation__list');


for (let link of navigationLinks) {
  link.addEventListener('click', () => {
    navigationList.classList.remove('is-active');
    pageBody.classList.remove('_no-scroll');
  })
}


//  Видео
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

// Плавные якорные ссылки
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
