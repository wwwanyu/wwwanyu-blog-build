const rotateEng=document.querySelector("#rotateEng"),header=document.querySelector(".header"),heading=document.querySelector(".heading"),globalnav=document.querySelector(".global-nav"),lazyTarget=document.querySelectorAll(".ioLazyload"),front=gsap.utils.toArray(".front");let readlers=document.getElementById("readlers");const lazyLoad=e=>{const t=new IntersectionObserver((e,o)=>{e.forEach(e=>{if(e.isIntersecting){const t=e.target;e=t.getAttribute("data-lazy");t.setAttribute("src",e),t.classList.add("loaded"),o.disconnect()}})});t.observe(e)};function scrollFunction(){20<document.body.scrollTop||20<document.documentElement.scrollTop?(header.classList.add("position-fixed","scrolled","z-index-1"),globalnav.classList.add("scrolled")):(header.classList.remove("position-fixed","scrolled","z-index-1"),globalnav.classList.remove("scrolled"))}lazyTarget.forEach(lazyLoad),$(".intro").mousemove(function(e){$(".intro-cursor").eq(0).css({left:e.pageX,top:e.pageY})}),$(".intro").on("mousemove",function(e){mouseX=e.pageX,mouseY=e.pageY}),window.onscroll=function(){scrollFunction()};for(var frames=document.querySelector(".frames"),spriteSheet={width:98,height:88,total:12,cols:12,rows:1,duration:3},tl=(TweenLite.set(frames,{force3D:!0,scrollTrigger:{trigger:".frames",scrub:!0}}),new TimelineMax({repeat:-1})),i=0;i<spriteSheet.total;i++)tl.set(frames,{x:i%spriteSheet.cols*-spriteSheet.width,y:Math.floor(i/spriteSheet.cols)*-spriteSheet.height},i/(spriteSheet.total-1)*spriteSheet.duration);ScrollTrigger.matchMedia({"(min-width: 1366px)":function(){let e=gsap.timeline({scrollTrigger:{trigger:".intro",start:"-100px",end:"+=300px",scrub:!0}});e.to(".w-squat",{opacity:0,rotation:100}).to(".w-squat",{opacity:1,rotation:-90,x:180}),gsap.to(".intro",{scrollTrigger:{trigger:".intro",toggleActions:"none none reverse none",start:"top",end:"+=300px",scrub:!0},rotation:90,ease:"none",duration:1}),gsap.to(".w-on-the-edge",{scrollTrigger:{trigger:".intro",toggleActions:"none none reverse none",start:"top",end:"+=300px",scrub:!0},rotation:180,x:200,opacity:0})},"(max-width: 1365px)":function(){let e=gsap.timeline({scrollTrigger:{trigger:".intro",toggleActions:"none none reverse none",start:"-50px 10px",end:"center",scrub:!0}});e.to(".w-squat",{opacity:0,rotation:100}).to(".w-squat",{opacity:1,rotation:-90}),gsap.to(".intro",{scrollTrigger:{trigger:".intro",toggleActions:"none none reverse none",start:"-50px 10px",end:"center",scrub:!0},rotation:90,duration:1}),gsap.to(".w-on-the-edge",{scrollTrigger:{trigger:".intro",toggleActions:"none none reverse none",start:"-50px 10px",end:"center",scrub:!0,pin:!0},rotation:180,x:200,opacity:0})}}),footerWsquat.to(".gsap-footer-wsquat",{opacity:0,rotation:-180});