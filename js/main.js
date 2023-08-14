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

})

const setSwiper = (id, object) => {
    new Swiper(id, object);
  }
  
  gsap.registerPlugin(ScrollTrigger);

  // gsap.to(".intro-cont", {
  //    scrollTrigger: {
  //     trigger: ".intro-cont h2",
  //     start: "top top",
  //     end: "+=300",
  //     scrub: 1,
  //     pin: true,
  //     markers: true
  //   },
  //   rotation: 400, 
  //   duration: 2
    
  // })
  let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".cont",
      pin: true,   // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=500", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      snap: {
        snapTo: "labels", // snap to the closest label in the timeline
        duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
      }
    }
  });

// add animations and labels to the timeline
tl.addLabel("start")
  .from(".intro-text", {scale: 0.3, rotation:45, autoAlpha: 0})
  .addLabel("color")
  .from(".intro-text", {backgroundColor: "#28a92b"})
  .addLabel("spin")
  .to(".intro-text", {rotation: 360})
  .addLabel("end");