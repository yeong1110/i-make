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
      console.log(el.classList);
      el.classList.add("active");
      if (el.classList.contains("scrollRun1")) {
        el.style.transform = `translateX(-${Math.abs(persentage).toFixed()}%)`;
      }
      if (el.classList.contains("scrollRun2")) {
        el.style.transform = `translateX(${Math.abs(persentage).toFixed()}%)`;
      }
    } else {
      el.style.transform = `none`;
			el.classList.remove("active");
    }
  });
}
