gsap.registerPlugin(ScrollTrigger);
AOS.init();

gsap.set(".intro-cont span", { opacity: 0 });
gsap.set(".we-animate-cont h3", { opacity: 0, y: -50 });
gsap.set(".we-animate-2 h4", { opacity: 0 });
gsap.set(".intro-after-wrap", { opacity: 0 });
// gsap.set(".we-elm", { y: 100, opacity: 0 });

let delay = 0;
let dur = 1.5;
let tp = "150%";
const address = document.getElementById("myAddress");
const myAlert = document.querySelector("#alert");
const btt = document.querySelector("#go-top");

//클립보드
function copy(e) {
  e.preventDefault();
  const content = "a027942@gmail.com";
  navigator.clipboard.writeText(content);
}

function timer() {
  setTimeout(function () {
    myAlert.classList.remove("active");
  }, 2600);
}

address.addEventListener("click", function (e) {
  copy(e);
  myAlert.classList.add("active");
  timer();
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    let scrollAmount = window.scrollY;
    if (scrollAmount > 600) {
      btt.className = "active";
    } else {
      btt.classList.remove("active");
    }
  });

  // 갤러리
  const img2 = document.querySelector(".imagine-cont");
  const img1 = document.querySelectorAll(".imagine-cont li img");
  lightbox = document.querySelector(".lightbox-overlay");
  lightboxContent = document.querySelector(".lightbox-content");

  function imgClick(e) {
    img2.addEventListener("click", function (e) {
      if (e.target.nodeName == "UL") {
        return;
      }
      e.preventDefault();
      e.stopImmediatePropagation();
      let target = e.target.getAttribute("data-src");

      lightboxContent.innerHTML = `<iframe height="100%" style="width: 100%;" scrolling="no" title="clip-path" src="https://codepen.io/yeong1110/embed/${target}?default-tab=result%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/yeong1110/pen/${target}">
  clip-path</a> by yeong1110 (<a href="https://codepen.io/yeong1110">@yeong1110</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>`;
      lightbox.classList.add("visible");
      document.body.classList.add("hidden");
      document.addEventListener("scroll", function (e) {
        e.preventDefault();
      });
    });
  }

  imgClick();
  lightbox.addEventListener("click", function () {
    lightbox.classList.remove("visible");
    document.body.classList.remove("hidden");
  });

  setSwiper(".infinite-swiper", {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 10,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
        ease: "power1.inOut",
      },

      // markers: true
    },
  });

  // add animations and labels to the timeline
  tl.addLabel("start")
    .from(".intro-text-1", { scale: 0.3, autoAlpha: 1 })
    .addLabel("text-2")
    .to(".intro-text-2", { opacity: 1 })
    .addLabel("text-2-2")
    .to(".intro-text-2", { scale: 0.3, opacity: 0 })
    .addLabel("text-3")
    .to(".intro-text-3", { opacity: 1 })
    .addLabel("text-3-2")
    .to(".intro-text-3", { opacity: 0 })
    .addLabel("text-4")
    .to(".intro-text-4", { opacity: 1 })
    .addLabel(".s")
    .to(".intro-after-wrap", { autoAlpha: 1 });

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
        ease: "power1.inOut",
      },
      // markers: true
    },
    translate: "none",
  });

  we.addLabel("start")
    .from(".i-1", { autoAlpha: 0 })
    .addLabel("start1")
    .to(".i-1", { x: 0, y: 0, scale: 1.2 })
    .addLabel("start2")
    .from(".i-2", { autoAlpha: 0 })
    .to(".i-2", { rotation: -15.924, x: 0, y: 0, scale: 1.2 })
    .addLabel("start3")
    .from(".i-3", { autoAlpha: 0 })
    .to(".i-3", { rotation: -14.849, x: 0, y: 0, scale: 1.2 })
    .addLabel("start4")
    .from(".i-4", { autoAlpha: 0 })
    .to(".i-4", { rotation: 23.129, x: 0, y: 0, scale: 1.2 })
    .addLabel("end")
    .to(".i-1", { rotation: 18 })
    .from(".i-5", { autoAlpha: 0, x: 0, y: 0 })
    .to(".i-5", { x: 0, y: 0 })
    .to(".we-animate-1", { opacity: 0, display: "none" })
    .to(".we-animate-2 h4", { opacity: 1 });
});

const setSwiper = (id, object) => {
  new Swiper(id, object);
};
