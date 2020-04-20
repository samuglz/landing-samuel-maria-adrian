const dots = document.querySelectorAll('.dot');
let currentSlide = 1;
const TIME_TO_SLIDE = 1000;
const SM_SCREEN = 640;
const FIRST_SLIDE = 1;
const isDesktop = window.innerWidth > SM_SCREEN;

const getNextSlide = (currentSlide) => currentSlide + 1;

const updateDot = (dot) => {
   dots.forEach((el) => el.classList.remove('active'));
   dot.classList.add('active');
   currentSlide = parseInt(dot.id.slice(4));
};

dots.forEach((dot) => {
   dot.addEventListener('click', () => updateDot(dot));
   dot.addEventListener('mousedown', () => clearInterval(autoplay));
});

const autoplay = setInterval(() => {
   if (isDesktop) {
      currentSlide = currentSlide === dots.length ? FIRST_SLIDE : getNextSlide(currentSlide);
      const dotToGo = document.querySelector(`#nav-${currentSlide}`);
      dotToGo.click();
   }
}, TIME_TO_SLIDE);
