//@prepros-append smooth-scroll.min.js

var slides = document.querySelectorAll('#testimonials__slider .slider__item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 7000);

function goToSlide(n) {
  slides[currentSlide].className = 'slider__item';
  document.querySelectorAll('#pagination button')[currentSlide].className = 'pagination__item';
  currentSlide = (n + slides.length) % slides.length;
  document.querySelectorAll('#pagination button')[currentSlide].className = 'pagination__item pagination__item--showing';
  slides[currentSlide].className = 'slider__item slider__item--showing';
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

var playing = true;

function pauseSlideshow() {
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  playing = true;
  slideInterval = setInterval(nextSlide, 7000);
}

(function() {
  var p = document.getElementById('pagination');

  var phtml = '';

  for (var i = 0; i < slides.length; i++) {
    phtml += '<button class="pagination__item">' + (i + 1) + '</button>';
  }

  p.innerHTML = phtml;

  var pbuttons = p.querySelectorAll('button');

  for (var i = 0; i < pbuttons.length; i++) {
    pbuttons[i].onclick = (function(n) {
      return function() {
        pauseSlideshow();
        goToSlide(n);
        playSlideshow();
      };
    })(i);
  }

})();
