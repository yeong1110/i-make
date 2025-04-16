const scrollElement = document.querySelectorAll(".isScroll");
window.addEventListener("scroll", scrollActive);
function scrollActive() {
  // console.log(window.pageYOffset);
  scrollElement.forEach((el, index) => {
    let elTop = el.getBoundingClientRect().top;
    let elBottom = el.getBoundingClientRect().bottom;
    let elHeight = elBottom - elTop;
    if (elTop.toFixed() <= 500 && elBottom.toFixed() >= -1) {
      let persentage = ((elTop - 500) / elHeight) * 100;
      const p100 = Math.abs(persentage).toFixed();
      // console.log(el.classList);
      el.classList.add("active");
      if (el.classList.contains("scrollRun1")) {
        el.style.transform = `translateX(-${p100}%)`;
      }
      if (el.classList.contains("scrollRun2")) {
        el.style.transform = `translateX(${p100}%)`;
      }
      if (el.classList.contains("interactive-list")) {
        el.style.transform = `translate3d(-${p100}%,${p100 / 100}px,10px)`;
      }
    } else {
      el.style.transform = `none`;
      el.classList.remove("active");
    }
  });
}
