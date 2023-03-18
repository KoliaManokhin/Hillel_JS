const slides = [
  './img/image1.jpg',
  './img/image2.jpg',
  './img/image3.jpg',
  './img/image4.jpg'
];

let slideIndex = 0;
const sliderImg = document.getElementById('slider-img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function showSlide(index) {
  sliderImg.src = slides[index];
}

function showNextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = slides.length - 1;
    nextBtn.style.display = 'none';
  }
  prevBtn.style.display = 'block';
  showSlide(slideIndex);
}

function showPrevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = 0;
    prevBtn.style.display = 'none';
  }
  nextBtn.style.display = 'block';
  showSlide(slideIndex);
}

prevBtn.style.display = 'none';
showSlide(slideIndex);

prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);