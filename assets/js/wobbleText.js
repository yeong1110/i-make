const wobbleEl = document.querySelectorAll(".wobble-wrap");

wobbleEl.forEach((el) => {
  document.addEventListener("mousemove", (e) => {
    // console.log(e);
    const filter = el.querySelector("svg feDisplacementMap");
    const rect = el.querySelector(".wobble-text").getBoundingClientRect();
    const inX = e.clientX >= rect.left && e.clientX <= rect.right;
    const inY = e.clientY >= rect.top && e.clientY <= rect.bottom;

    if (inX && inY) {
      const dx = (e.clientX - rect.left) / rect.width;
      const dy = (e.clientY - rect.top) / rect.height;

      // 마우스 위치 기반으로 scale 조절
      const scale = 30 * (1 - Math.hypot(dx - 0.5, dy - 0.5));
      filter.setAttribute("scale", scale);
    } else {
      filter.setAttribute("scale", getRandomInt(0, scale));
    }
  });
});
