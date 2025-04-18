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
    if (scrollAmount > 100) {
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
});

// 난수생성
function getRandomInt(min, max) {
  return Math.floor(
    Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min)
  );
}

const setSwiper = (id, object) => {
  new Swiper(id, object);
};
