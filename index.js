function Carousel(carouselEl, speed) {
  this.slides = carouselEl.querySelector('.carousel__slides');
  this.controls = carouselEl.querySelector('.carousel__controls');
  this.carouselSpeed = speed || 5000;

  this.slides.addEventListener('keydown', e => {
    this.handleKeyPress(e);
  });
  this.slides.parentElement.addEventListener('touchstart', e => {
    this.handleSwipe(e);
  });

  this.init();
}

// Get things going
Carousel.prototype.init = function() {
  this.current = this.slides.firstElementChild;
  this.createControls();
  this.current.classList.add('carousel__slide--current');

  // Beginning the cycle
  this.carouselCycle = setInterval(() => {
    this.nextSlide();
  }, this.carouselSpeed);
};

// Updates the carousel by taking in the target slide
Carousel.prototype.updateCarousel = function(target) {
  // Pause the cycle
  clearInterval(this.carouselCycle);

  // Removing active class from current slide
  Array.from(this.slides.children).forEach(el =>
    el.classList.remove('carousel__slide--current')
  );

  // Set active class on new current slide
  target.classList.add('carousel__slide--current');

  // Get index of new slide and update controls
  const targetIndex = this.getCurrentSlideIndex(target);
  this.updateControls(targetIndex);

  // Updating current variable
  this.current = target;

  // Restart carousel cycle
  this.carouselCycle = setInterval(() => {
    this.nextSlide();
  }, this.carouselSpeed);
};

Carousel.prototype.nextSlide = function() {
  this.updateCarousel(
    this.current.nextElementSibling || this.slides.firstElementChild
  );
};

Carousel.prototype.prevSlide = function() {
  this.updateCarousel(
    this.current.previousElementSibling || this.slides.lastElementChild
  );
};

// Handling the indicator buttons on click
Carousel.prototype.handleControls = function(_el, index) {
  const newSlide = Array.from(this.slides.children)[index];
  this.updateCarousel(newSlide);
  return this.carouselCycle;
};

// Keyboard nav (tabindex set on 'carousel__slides' div)
Carousel.prototype.handleKeyPress = function(e) {
  let target;
  if (e.key === 'ArrowRight') {
    target = this.current.nextElementSibling || this.slides.firstElementChild;
  } else if (e.key === 'ArrowLeft') {
    target =
      this.current.previousElementSibling || this.slides.lastElementChild;
  } else {
    return;
  }
  this.updateCarousel(target);
};

Carousel.prototype.createControls = function() {
  const numberOfSlides = this.slides.children.length;
  for (let i = 0; i < numberOfSlides; i++) {
    const indicator = document.createElement('div');
    indicator.setAttribute('role', 'button');
    indicator.setAttribute('class', 'carousel__control');
    this.controls.insertAdjacentElement('beforeend', indicator);
  }
  this.controls.firstElementChild.classList.add('carousel__control--current');
  const controlIndicators = Array.from(this.controls.children);
  controlIndicators.forEach((el, index) => {
    el.addEventListener('click', () => this.handleControls(el, index));
  });
};

Carousel.prototype.updateControls = function(index) {
  const indicators = Array.from(
    this.controls.querySelectorAll('.carousel__control')
  );
  indicators.forEach(el => el.classList.remove('carousel__control--current'));
  indicators[index].classList.add('carousel__control--current');
};

Carousel.prototype.getCurrentSlideIndex = function(currentSlide) {
  const index = Array.from(
    this.slides.querySelectorAll('.carousel__slide')
  ).findIndex(slide => slide === currentSlide);
  return index;
};

// Touch/Swipe support
Carousel.prototype.handleSwipe = function(e) {
  const startPos = e.touches[0].clientX;
  const threshold = 120;

  function touchEnd(touchEvent, carouselInstance) {
    carouselInstance.slides.removeEventListener('touchend', touchEnd);
    const endPos = touchEvent.changedTouches[0].clientX;
    if (startPos < endPos && endPos - startPos > threshold) {
      carouselInstance.prevSlide();
    } else if (startPos > endPos && startPos - endPos > threshold) {
      carouselInstance.nextSlide();
    }
  }
  this.slides.addEventListener('touchend', touchEvent => {
    touchEnd(touchEvent, this);
  });
};

export default Carousel;
