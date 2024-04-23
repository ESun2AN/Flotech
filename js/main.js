
// slide script
const slides = document.querySelectorAll('.slide_nav');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 3000;
let slideInterval;
const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');

  current.classList.remove('current');

  if (current.nextElementSibling) {

    current.nextElementSibling.classList.add('current');
  } else {

    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};
const prevSlide = () => {

  const current = document.querySelector('.current');

  current.classList.remove('current');

  if (current.previousElementSibling) {

    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});


if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}


const map = document.querySelector('.main_category_ul');
const items = map.children;
console.log(items);

for(let i=0; i<items.length; i++){
  items[i].addEventListener('mouseover',pop);
}

function pop(e) {
  for (let i = 0; i < 30; i++) {
    createParticle(e.clientX, e.clientY, e.target.dataset.type);
  }
}

function redirectToSite() {

  var targetSiteUrl = "main.html";
  
  window.location.href = targetSiteUrl;
}

