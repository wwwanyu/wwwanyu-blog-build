const rotateEng = document.querySelector('#rotateEng');
const header = document.querySelector('.header');
const heading = document.querySelector('.heading');
const globalnav = document.querySelector('.global-nav');
const lazyTarget = document.querySelectorAll('.ioLazyload');
const front = gsap.utils.toArray('.front');
let readlers = document.getElementById("readlers");

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

$('.intro').mousemove(function(e) {
  $('.intro-cursor').eq(0).css({ left: e.pageX, top: e.pageY }); });
  $('.intro').on("mousemove", function(e) { mouseX = e.pageX; mouseY = e.pageY; }
);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.classList.add('position-fixed', 'scrolled', 'z-index-1');
    globalnav.classList.add('scrolled');
  }else{
    header.classList.remove('position-fixed', 'scrolled', 'z-index-1');
    globalnav.classList.remove('scrolled');
  }
}

var frames = document.querySelector(".frames");

var spriteSheet = {
  width: 98,
  height: 88,
  total: 12,
  cols: 12,
  rows: 1,
  duration: 3
};

TweenLite.set(frames, { 
  force3D: true,
  scrollTrigger:{
    trigger: ".frames",
    scrub: true
  }
});

var tl = new TimelineMax({ repeat: -1});

for (var i = 0; i < spriteSheet.total; i++) {  
  tl.set(frames, {
    x: (i % spriteSheet.cols) * -spriteSheet.width,
    y: Math.floor(i / spriteSheet.cols) * -spriteSheet.height
  }, i / (spriteSheet.total - 1) * spriteSheet.duration);
}

ScrollTrigger.matchMedia({
  "(min-width: 1366px)": function(){
    let wSquat = gsap.timeline({
      scrollTrigger: {
        trigger: ".intro",
        start: "-100px",
        end: "+=300px",
        scrub: true,
      }
    });
    
    wSquat.to(".w-squat", {opacity: 0, rotation: 100})
          .to(".w-squat", {opacity: 1, rotation: -90, x:180});
    
    gsap.to(".intro", {
      scrollTrigger: {
        trigger: ".intro",
        toggleActions: "none none reverse none",
        start: "top",
        end: "+=300px",
        scrub: true,
      },
      rotation: 90,
      ease: "none",
      duration: 1
    });
    
    gsap.to(".w-on-the-edge", {
      scrollTrigger: {
        trigger: ".intro",
        toggleActions: "none none reverse none",
        start: "top",
        end: "+=300px",
        scrub: true,
      },
      rotation: 180,
      x: 200,
      opacity: 0
    });
  },

  "(max-width: 1365px)": function(){
    let wSquat = gsap.timeline({
      scrollTrigger: {
        trigger: ".intro",
        toggleActions: "none none reverse none",
        start: "-50px 10px",
        end: "center",
        scrub: true,
      }
    });
    
    wSquat.to(".w-squat", {opacity: 0, rotation: 100})
          .to(".w-squat", {opacity: 1, rotation: -90});
    
    gsap.to(".intro", {
      scrollTrigger: {
        trigger: ".intro",
        toggleActions: "none none reverse none",
        start: "-50px 10px",
        end: "center",
        scrub: true,
      },
      rotation: 90,
      duration: 1
    });
    
    gsap.to(".w-on-the-edge", {
      scrollTrigger: {
        trigger: ".intro",
        toggleActions: "none none reverse none",
        start: "-50px 10px",
        end: "center",
        scrub: true,
        pin: true
      },
      rotation: 180,
      x: 200,
      opacity: 0
    });
  }
});
