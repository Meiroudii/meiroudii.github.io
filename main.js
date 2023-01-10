const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const auto = true; // TODO add a play button and off 
const intervalTime = 5000;
let slideInterval;

// has to methods for the next and prev
const nextSlide = () => {
  // get current class
  const current = document.querySelector('.current');
  // remove current class
  current.classList.remove('current');
  // check for next slide
  if(current.nextElementSibling) {
    // Add current to the next sibling
    current.nextElementSibling.classList.add('current');
  }
  else {
    // Will add current to the start again (first child)
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}
const prevSlide = () => {
  // get current class
  const current = document.querySelector('.current');
  // remove current class
  current.classList.remove('current');
  // check for prev slide
  if(current.previousElementSibling) {
    // Add current to the previous sibling
    current.previousElementSibling.classList.add('current');
  }
  else {
    // Will add current to the last again (last child)
    slides[slides.length - 1].classList.add('current');// now it doesn't matter how many slides you have 
  }
  setTimeout(() => current.classList.remove('current'));
}

// after this must add an event listener to have a function
// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    // clear interval to set into consistent pace
    clearInterval(slideInterval);
    setInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    setInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide 
if(auto) {
  // Run next slide at interval time
  setInterval = setInterval(nextSlide, intervalTime);
}