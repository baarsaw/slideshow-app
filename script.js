// Variables for the slideshow
let currentSlide = 0;
let slideshowInterval;

// Array of images
const images = [
  'slideshow_photos/image1.jpg',
  'slideshow_photos/image2.jpg'
];

// DOM elements
const slideshowImage = document.getElementById('slideshow');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

// Function to start the slideshow
function startSlideshow() {
  if (!slideshowInterval) {
    slideshowInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % images.length;
      slideshowImage.src = images[currentSlide];
    }, 4000); // Change slide every 2 seconds
  }
}

// Function to stop the slideshow
function stopSlideshow() {
  clearInterval(slideshowInterval);
  slideshowInterval = null;
}

// Add event listeners to buttons
startBtn.addEventListener('click', startSlideshow);
stopBtn.addEventListener('click', stopSlideshow);
