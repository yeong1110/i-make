const scrollElements = document.querySelectorAll(".isScroll");

let isScrolling = false;

window.addEventListener("scroll", () => {
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(() => {
      handleScroll();
      isScrolling = false;
    });
  }
});

const handleScroll = () => {
  const triggerPoint = 500;

  scrollElements.forEach((element) => {
    const { top: elTop, bottom: elBottom } = element.getBoundingClientRect();
    const elHeight = elBottom - elTop;
    const percentage = Math.abs(
      ((elTop - triggerPoint) / elHeight) * 100
    ).toFixed();
    const isInView = elTop <= triggerPoint && elBottom >= -1;

    element.classList.toggle("active", isInView);

    // 클래스별 변환 스타일 정의
    const transforms = {
      "scrollRun1": {
        inView: () => `translateX(-${percentage}%)`,
        outView: () => `none`,
      },
      "scrollRun2": {
        inView: () => `translateX(${percentage}%)`,
        outView: () => `none`,
      },
      "scrollBack": {
        inView: () => `translateX(${percentage}%)`,
        outView: () => `translateX(-${percentage}%)`,
      },
      "scrollRotate": {
        inView: () => `rotate(${percentage}deg)`,
        outView: () => `rotate(-${percentage}deg)`,
      },
      "interactive-list": {
        inView: () => `translate3d(0%, -${percentage / 100}px, 0)`,
        outView: () => `translate3d(-${percentage}%, ${percentage / 100}px, 0)`,
      },
    };

    // 해당 클래스에 맞는 변환 적용
    let applied = false;
    for (const [className, { inView, outView }] of Object.entries(transforms)) {
      if (element.classList.contains(className)) {
        element.style.transform = isInView ? inView() : outView();
        applied = true;
        break;
      }
    }

    // 클래스가 정의되지 않은 경우 transform 유지
    if (!applied) {
      element.style.transform = element.style.transform || "none";
    }
  });
};
// if(el.classList.contains("scrollRun1")){
// 	if(elTop.toFixed() <= 500 && elBottom.toFixed() >= -1){
// 		el.style.transform = `translateX(-${p100}%)`;
// 	}else{
// 		el.style.transform = `none`;
// 	}
// }
// if(el.classList.contains("scrollRun2")){
// 	if(elTop.toFixed() <= 500 && elBottom.toFixed() >= -1){
// 		el.style.transform = `translateX(${p100}%)`;
// 	}else{
// 		el.style.transform = `none`;
// 	}
// }
// if(el.classList.contains("scrollBack")){
// 	el.style.transform = `translateX(-100%)`
// 	if(elTop.toFixed() <= 500 && elBottom.toFixed() >= -1){
// 		el.style.transform = `translateX(${p100}%)`;
// 	}else{
// 		el.style.transform = `translateX(-${p100}%)`;
// 	}
// }
// if(el.classList.contains("interactive-list")){
// 	if(elTop.toFixed() <= 500 && elBottom.toFixed() >= -1){
// 		el.style.transform = `translate3d(0%, -${p100 / 100}px, 0)`;
// 	}else{
// 		el.style.transform = `translate3d(-${p100}%, ${p100 / 100}px, 0)`;
// 	}
// }
