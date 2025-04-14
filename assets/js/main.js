AOS.init();

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

  // we.addLabel("start")
  //   .from(".i-1", { autoAlpha: 0 })
  //   .addLabel("start1")
  //   .to(".i-1", { x: 0, y: 0, scale: 1.2 })
  //   .addLabel("start2")
  //   .from(".i-2", { autoAlpha: 0 })
  //   .to(".i-2", { rotation: -15.924, x: 0, y: 0, scale: 1.2 })
  //   .addLabel("start3")
  //   .from(".i-3", { autoAlpha: 0 })
  //   .to(".i-3", { rotation: -14.849, x: 0, y: 0, scale: 1.2 })
  //   .addLabel("start4")
  //   .from(".i-4", { autoAlpha: 0 })
  //   .to(".i-4", { rotation: 23.129, x: 0, y: 0, scale: 1.2 })
  //   .addLabel("end")
  //   .to(".i-1", { rotation: 18 })
  //   .from(".i-5", { autoAlpha: 0, x: 0, y: 0 })
  //   .to(".i-5", { x: 0, y: 0 })
  //   .to(".we-animate-1", { opacity: 0, display: "none" })
  //   .to(".we-animate-2 h4", { opacity: 1 });
});

const setSwiper = (id, object) => {
  new Swiper(id, object);
};
