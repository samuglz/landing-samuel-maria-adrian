const dots = document.querySelectorAll('.dot');
let currentSlide = 1;
const TIME_TO_SLIDE = 10000;
const SM_SCREEN = 640;

dots.forEach((dot) => {
   dot.addEventListener('click', () => {
      dots.forEach((el) => {
         el.className = 'dot';
      });
      dot.className = 'dot active';
   });
});

setInterval(() => {
   if (window.innerWidth > SM_SCREEN) {
      if (currentSlide === dots.length) {
         currentSlide = 1;
         const dot = document.querySelector(`#nav-${currentSlide}`);
         dot.click();
      } else {
         currentSlide++;
         const dot = document.querySelector(`#nav-${currentSlide}`);
         dot.click();
      }
   }
}, TIME_TO_SLIDE);
