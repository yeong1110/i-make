const scrollElement = document.querySelectorAll(".isScroll");
window.addEventListener("scroll", scrollActive);
function scrollActive() {
  // console.log(window.pageYOffset);
  scrollElement.forEach((el, index) => {
    const elTop = el.getBoundingClientRect().top;
    const elBottom = el.getBoundingClientRect().bottom;
    const elHeight = elBottom - elTop;
		let persentage = ((elTop - 500) / elHeight) * 100;
		const p100 = Math.abs(persentage).toFixed();
		if(el.classList.contains("scrollRun1")){
			if(elTop.toFixed() <= 500 && elBottom.toFixed() >= -1){
				el.style.transform = `translateX(-${p100}%)`;
			}else{
				el.style.transform = `none`;
			}
		}
		if(el.classList.contains("scrollRun2")){
			if(elTop.toFixed() <= 500 && elBottom.toFixed() >= -1){
				el.style.transform = `translateX(${p100}%)`;
			}else{
				el.style.transform = `none`;
			}
		}
		if(el.classList.contains("scrollBack")){
			el.style.transform = `translateX(-100%)`
			if(elTop.toFixed() <= 500 && elBottom.toFixed() >= -1){
				el.style.transform = `translateX(${p100}%)`;
			}else{
				el.style.transform = `translateX(-${p100}%)`;
			}
		}
		if(el.classList.contains("interactive-list")){
			if(elTop.toFixed() <= 500 && elBottom.toFixed() >= -1){
				el.style.transform = `translate3d(0%, -${p100 / 100}px, 0)`;
			}else{
				el.style.transform = `translate3d(-${p100}%, ${p100 / 100}px, 0)`;
			}
		}
    if (elTop.toFixed() <= 500 && elBottom.toFixed() >= -1) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}
