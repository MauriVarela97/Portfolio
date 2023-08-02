/*document.addEventListener('DOMContentLoaded', function () {
  const cardButtons = document.querySelectorAll('.card__button');

  cardButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const carouselId = this.getAttribute('data-carousel');
      const carousel = document.getElementById(carouselId);

      // Show the carousel
      carousel.style.display = 'block';

      // Add event listeners for carousel controls
      const closeButton = carousel.querySelector('.carousel__close');
      closeButton.addEventListener('click', function () {
        carousel.style.display = 'none';
      });

      const prevButton = carousel.querySelector('.carousel__button--prev');
      const nextButton = carousel.querySelector('.carousel__button--next');
      const carouselImages = carousel.querySelectorAll('.carousel__images img');

      let currentIndex = 0;

      function showImage(index) {
        carouselImages.forEach(function (image, i) {
          if (i === index) {
            image.style.display = 'block';
          } else {
            image.style.display = 'none';
          }
        });
      }

      function nextImage() {
        currentIndex++;
        if (currentIndex >= carouselImages.length) {
          currentIndex = 0;
        }
        showImage(currentIndex);
      }

      function prevImage() {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = carouselImages.length - 1;
        }
        showImage(currentIndex);
      }

      showImage(currentIndex);

      nextButton.addEventListener('click', nextImage);
      prevButton.addEventListener('click', prevImage);
    });
  });
});*/
