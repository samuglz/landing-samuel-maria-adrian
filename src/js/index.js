import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const dotsNav = document.querySelectorAll('.dot');
let currentSection = 1;

window.onresize = manageWheelEvent;
manageWheelEvent();

const date = new Date();
const textFooter = document.querySelector('#autoria');
textFooter.innerHTML = `&copy; Adrián, Samuel y María | ${date.getFullYear()}`;

function manageWheelEvent() {
   if (window.innerWidth >= 768) {
      window.addEventListener('wheel', wheelListener);
   } else {
      window.removeEventListener('wheel', wheelListener);
   }
}

function removeActiveClass() {
   dotsNav.forEach((el) => {
      el.classList.remove('active');
   });
}

function scrollDown() {
   window.scrollBy(0, window.innerHeight);
   if (currentSection < dotsNav.length) {
      currentSection++;
   }
}

function scrollUp() {
   if (currentSection > 1) {
      currentSection--;
   }
   window.scrollBy(0, -window.innerHeight);
}

dotsNav.forEach((dot) => {
   dot.addEventListener('click', () => {
      removeActiveClass();
      dot.classList.add('active');
      currentSection = parseInt(dot.id.slice(4));
   });
});

function wheelListener(event) {
   event.deltaY > 0 ? scrollDown() : scrollUp();
   const activeDot = document.querySelector(`#nav-${currentSection}`);
   removeActiveClass();
   activeDot.classList.add('active');
}
