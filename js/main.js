gsap.registerPlugin(ScrollTrigger);

gsap.set('.intro-cont span',{opacity:0})
gsap.set('.we-animate-cont h3',{opacity:0, y: -50})
gsap.set('.we-animate-1 p',{x: 100, y:50})
gsap.set('.we-animate-2 h4',{opacity: 0})
gsap.set(".we-elm", { y: 100, opacity: 0 })

var delay = 0;
var dur = 1.5;
var tp = "150%";

$(function(){
    setSwiper('.infinite-swiper', {
        // Optional parameters
        slidesPerView: 2,
        spaceBetween: 10,
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    
    });
    
    setSwiper('.imagine-wrap',{
      direction: "vertical",
      // autoHeight: true,
      // allowTouchMove: false,
      // slidesPerColumn: 3,
      slidesPerView: "auto",
      grid: {
        rows: 2,
      },
      // slidesPerView: 3,
      // spaceBetween: 10,
    })

    let tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: ".intro-wrap",
        pin: true,   // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=1000", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
          snapTo: "labels", // snap to the closest label in the timeline
          duration: 1, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
        },
        
        // markers: true
      }
    });
  
  // add animations and labels to the timeline
  tl.addLabel("start")
    .from(".intro-text-1", {scale: 0.3, autoAlpha: 1})
    .addLabel("text-2").to(".intro-text-2",{opacity: 1})
    .addLabel("text-2-2").to(".intro-text-2",{scale: 0.3, opacity: 0})
    .addLabel("text-3").to(".intro-text-3",{opacity: 1})
    .addLabel("text-3-2").to(".intro-text-3",{opacity: 0})
    .addLabel("text-4").to(".intro-text-4",{opacity: 1})
  
    gsap.to('.we-animate-cont h3',{
      scrollTrigger: {
        trigger: ".we-animate-cont h3",
        pin: true,
        // markers: true,
      },
      y: 0,
      opacity: 1,
    });
  
    let we = gsap.timeline({
      scrollTrigger: {
        trigger: ".we-animate-1",
        // pin: true,
        start: "-=1500", 
        end: "+=500",
        snap: {
          snapTo: "labels",
          duration: 1.5,
          delay: 4, 
          ease: "power1.inOut"
        },
        markers: true
      },
      translate: 'none',
    });
  
    we.addLabel("start")
    .from('.i-1', {autoAlpha: 0})
    .addLabel("start1")
    .to('.i-1', {x: 0, y:0, scale: 1.2})
    .addLabel('start2')
    .from('.i-2', {autoAlpha: 0 })
    .to('.i-2', {rotation: -30.924, x: 0, y:0, scale: 1.2})
    .addLabel('start3')
    .from('.i-3', {autoAlpha: 0 })
    .to('.i-3', {rotation: -14.849, x: 0, y:0, scale: 1.2})
    .addLabel('start4')
    .from('.i-4', {autoAlpha: 0 })
    .to('.i-4', {rotation: 23.129, x: 0, y:0, scale: 1.2})
    .addLabel('end')
    .to('.i-1', {rotation: 18})
    .to('.we-animate-1',{x: -30})
    .from('.i-5', {autoAlpha: 0,x: 0, y: 0})
    .to('.i-5', {x: 0, y: 0})
    .to('.we-animate-1', {opacity: 0, display: 'none'})
    .to('.we-animate-2 h4', {opacity: 1})

    gsap.utils.toArray(".we-elm").forEach(function (entry) {
      delay = $(entry).attr('data-delay');
      if ($(entry).attr('data-dur')) {
          dur = $(entry).attr('data-dur');
      }
      if ($(entry).attr('data-tp')) {
          tp = $(entry).attr('data-tp');
      }
      var weTl = gsap.timeline({
          scrollTrigger: {
              trigger: entry,
              start: "top " + tp,
              scrub: 1,
          },
          // markers: true,
      });
      weTl.to(entry, { delay: delay, duration: dur, opacity: 1, y: 0 });
  });

    // gsap.to('.we-animate-2 h4',{
    //   scrollTrigger: {
    //     trigger: ".we-animate-2 h4",
    //     pin: true,
    //     markers: true,
    //     start: 'center top',
    //     snap: {
    //       snapTo: '.we-text-1'
    //     }
    //   },
    //   opacity: 1,
    // })
})

const setSwiper = (id, object) => {
    new Swiper(id, object);
  }
  

  



