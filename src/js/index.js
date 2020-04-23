import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const dots = document.querySelectorAll('.dot');
let stateSection = 1;

function removeActiveClass() {
   dots.forEach((el) => {
      el.classList.remove('active');
   });
}

function scrollDown() {
   window.scrollBy(0, window.innerHeight);
   if (stateSection < dots.length) {
      stateSection++;
   }
}

function scrollUp() {
   if (stateSection > 1) {
      stateSection--;
   }
   window.scrollBy(0, -window.innerHeight);
}

dots.forEach((dot) => {
   dot.addEventListener('click', () => {
      removeActiveClass();
      dot.classList.add('active');
      stateSection = parseInt(dot.id.slice(4));
   });
});

window.addEventListener('wheel', (e) => {
   e.deltaY > 0 ? scrollDown() : scrollUp();
   const activeDot = document.querySelector(`#nav-${stateSection}`);
   removeActiveClass();
   activeDot.classList.add('active');
});
