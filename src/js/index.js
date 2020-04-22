import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

window.addEventListener('wheel', (e) => {
   e.deltaY > 0 ? window.scrollBy(0, window.innerHeight) : window.scrollBy(0, -window.innerHeight);
});
