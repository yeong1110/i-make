const srcollEl = document.querySelectorAll(".scroll");
const observer = new IntersectionObserver((e) => {
  e.forEach((el) => {
    // el.isIntersecting ? el.target.classList.add("active") : el.target.classList.remove("active");
    if (el.isIntersecting) {
      el.target.classList.add("active");
    }
  });
});
srcollEl.forEach((el) => {
  observer.observe(el);
});
