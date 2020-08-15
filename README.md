# Hero Carousel

A pretty bare-bones masthead carousel made for myself to re-use parts of and customise for client sites. Has keyboard navigation support and basic swipe handling.

I built this package to practise my JavaScript and to have a go at my first time creating an npm package. There are probably better ways to do things. Change things up however you like, suggestions welcome.

## Installation

1. `npm install hero-carousel`

## Usage

### Javascript

```javascript
import Carousel from "hero-carousel";

new Carousel(".carousel", 3000);
```

### HTML

```html
<div class="carousel">
  <div class="carousel__slides" tabindex="0">
    <div class="carousel__slide">
      <div class="carousel__slide-content">
        <h2 class="carousel__slide-title">Lorem ipsum dolor sit amet.</h2>
        <p class="carousel__slide-description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </p>
        <a href="#0" class="carousel__slide-button">Find out more</a>
      </div>
      <img
        src="./images/placeholder-1.jpg"
        class="carousel__slide-image"
        alt="Image"
      />
    </div>
    <div class="carousel__slide">
      <div class="carousel__slide-content">
        <h2 class="carousel__slide-title">
          Donec odio. Quisque volutpat mattis eros.
        </h2>
        <p class="carousel__slide-description">
          Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
          mauris sit amet orci. Aenean dignissim pellentesque felis.
        </p>
        <a href="#0" class="carousel__slide-button">Find out more</a>
      </div>
      <img
        src="./images/placeholder-2.jpg"
        class="carousel__slide-image"
        alt="Image"
      />
    </div>
    <div class="carousel__slide">
      <div class="carousel__slide-content">
        <h2 class="carousel__slide-title">
          Nullam malesuada erat ut turpis.
        </h2>
        <p class="carousel__slide-description">
          Praesent dapibus, neque id cursus faucibus, tortor neque egestas
          auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam
          dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
        </p>
        <a href="#0" class="carousel__slide-button">Find out more</a>
      </div>
      <img
        src="./images/placeholder-3.jpg"
        class="carousel__slide-image"
        alt="Image"
      />
    </div>
  </div>
  <div class="carousel__controls"></div>
</div>
```

### CSS

```css
.carousel {
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  background: #000;
}

.carousel__slide {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  background: #000;
  opacity: 0;
  pointer-events: none;
  transition: all 0.6s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide--current {
  opacity: 1;
  pointer-events: all;
}

.carousel__slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0.5;
}

.carousel__slide-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 2rem;
  text-align: center;
}

.carousel__slide-title {
  font-size: 48px;
  line-height: 1.1;
  max-width: 1000px;
  margin: 0 auto;
}

.carousel__slide-description {
  max-width: 800px;
  margin: 1.5rem auto 0;
  line-height: 1.3;
}

.carousel__slide-button {
  background: none;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 6px;
  padding: 1rem 2rem;
  text-decoration: none;
  max-width: 210px;
  margin: 2rem auto 0;
  transition: all 0.2s ease-in-out;
}

.carousel__slide-button:hover {
  background: #fff;
  color: #000;
}

.carousel__controls {
  display: flex;
  position: relative;
  margin-top: auto;
  margin-bottom: 3rem;
  z-index: 5;
}

.carousel__control {
  opacity: 0.3;
  background: #fff;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  line-height: 1.5;
  border: none;
  margin: 0px 15px 0px 0px;
  transition: all 0.3s ease-in-out;
}

.carousel__control:last-child {
  margin-right: 0;
}

.carousel__control--current {
  opacity: 1;
}

.carousel__control:hover {
  opacity: 1;
  cursor: pointer;
}
```
