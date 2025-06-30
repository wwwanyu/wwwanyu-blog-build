const header = document.querySelector('.header');
const heading = document.querySelector('.heading');
const globalnav = document.querySelector('.global-nav');
const lazyTarget = document.querySelectorAll('.ioLazyload');


const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');

        img.setAttribute('src', src);
        img.classList.add('loaded');

        observer.disconnect();
      }
    });
  });
  io.observe(target)
};

lazyTarget.forEach(lazyLoad);

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.classList.add('position-fixed', 'scrolled', 'z-index-1');
    globalnav.classList.add('scrolled');
  } else {
    header.classList.remove('position-fixed', 'scrolled', 'z-index-1');
    globalnav.classList.remove('scrolled');
  }
}

if ($.fancybox) {
  $('.fancybox').fancybox();
}