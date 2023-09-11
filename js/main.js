gsap.registerPlugin(ScrollTrigger);
AOS.init();

gsap.set('.intro-cont span',{opacity:0})
gsap.set('.we-animate-cont h3',{opacity:0, y: -50})
// gsap.set('.we-animate-1 p',{x: 100, y:50})
gsap.set('.we-animate-2 h4',{opacity: 0})
gsap.set('.intro-after-wrap',{opacity: 0})
gsap.set(".we-elm", { y: 100, opacity: 0 })

var delay = 0;
var dur = 1.5;
var tp = "150%";
const address = document.getElementById('myAddress');
const myAlert = document.querySelector('#alert');
const btt = document.querySelector('#go-top');

//클립보드
  function copy(e){
    e.preventDefault();
    const content = 'a027942@gmail.com';
    navigator.clipboard.writeText(content);
    }

function timer(){
  setTimeout(function(){
    myAlert.classList.remove('active');
  },2600)
}

  address.addEventListener('click',function(e) {
    copy(e);

    // myAlert = 
    // `
    // <div>
    //     <p>성공적으로 복사되었습니다!</p>
    // </div>
    // `
    // document.getElementById('alert').innerHTML = myAlert;
    myAlert.classList.add('active');
    timer();
    
  });

  
  document.addEventListener('DOMContentLoaded',function(){
      window.addEventListener('scroll',function(){
          let scrollAmount = window.scrollY;
          if(scrollAmount > 600){
              btt.className = 'active'
          }else{
              btt.classList.remove('active');
          }
      })
  })
  btt.addEventListener('click', function(e){
      e.preventDefault();
      window.scrollTo({
          top:0,
          left:0,
          behavior:'smooth'
      });
  })
  document.querySelector('.navi-area').addEventListener('click',function(e){
    console.log('ok');
    e.preventDefault();
    var anchor = e.target.getAttribute('href');
    console.log(anchor)
    window.scrollTo({
      top: anchor.offsetTop
    })
    console.log(anchor.offsetTop)
  })

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
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
    });
    
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".intro-wrap",
        pin: true,   
        start: "top top", 
        end: "+=800", 
        scrub: 1, 
        snap: {
          snapTo: "labels", 
          duration: 1, 
          delay: 0.2, 
          ease: "power1.inOut" 
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
    .addLabel(".s").to(".intro-after-wrap", {autoAlpha:1})
  
  
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
        // markers: true
      },
      translate: 'none',
    });
  
    we.addLabel("start")
    .from('.i-1', {autoAlpha: 0})
    .addLabel("start1")
    .to('.i-1', {x: 0, y:0, scale: 1.2})
    .addLabel('start2')
    .from('.i-2', {autoAlpha: 0 })
    .to('.i-2', {rotation: -15.924, x: 0, y:0, scale: 1.2})
    .addLabel('start3')
    .from('.i-3', {autoAlpha: 0 })
    .to('.i-3', {rotation: -14.849, x: 0, y:0, scale: 1.2})
    .addLabel('start4')
    .from('.i-4', {autoAlpha: 0 })
    .to('.i-4', {rotation: 23.129, x: 0, y:0, scale: 1.2})
    .addLabel('end')
    .to('.i-1', {rotation: 18})
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

  // gsap.to(".interactive-section", {
  //   scrollTrigger: {
  //     trigger: ".interactive-section",
  //     pin: true,
  //     // start: "top 10",
  //     // end: "bottom center",
  //   },
  //   ypercent: 100,
  // })

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
  

  



