document.addEventListener("DOMContentLoaded", function () {
  const imagineFrames = document.querySelectorAll(
    ".imagine-cont li .imagine-frame"
  );
  const randomNum = getRandomInt(0, imagineFrames.length);

  imagineFrames.forEach((el, index) => {
    if (!el) return;

    const attr = el.getAttribute("data-src");
    const src = `imagines/${attr}.html`;
    const shadowRoot = el.attachShadow({ mode: "open" });

    // 초기 로드 (특정 index만 로드)
    if (index === randomNum || index === 0) {
      loadContent(src, shadowRoot, index);
    }

    // 마우스 이벤트 등록
    el.addEventListener("mouseenter", () =>
      loadContent(src, shadowRoot, index)
    );
    el.addEventListener("mouseleave", () => (shadowRoot.innerHTML = ""));
  });
});

/**
 * 콘텐츠를 불러오는 함수 (fetch 재사용)
 * @param {string} src - 불러올 HTML 파일 경로
 * @param {ShadowRoot} shadowRoot - Shadow DOM 루트
 * @param {number} index - 현재 인덱스
 */
function loadContent(src, shadowRoot, index) {
  fetch(src)
    .then((res) => res.text())
    .then((data) => {
      shadowRoot.innerHTML = data;
      attachBlendBoxEvent(shadowRoot, index);
    });
}

/**
 * Shadow DOM 내부 이벤트 핸들링
 */
function attachBlendBoxEvent(shadowRoot, index) {
  if (index === 5) activateBlendBox(shadowRoot);
  if (index === 9) activateTextAnimation(shadowRoot);
}

/**
 * .blend-box 요소에 마우스 이벤트 추가
 * @param {ShadowRoot} shadowRoot - Shadow DOM 루트
 */
function activateBlendBox(shadowRoot) {
  setTimeout(() => {
    const blendBoxes = shadowRoot.querySelectorAll(".blend-box");

    function handleMouse(isEnter, e) {
      e.target.classList.toggle("active", isEnter);
    }

    blendBoxes.forEach((box) => {
      box.addEventListener("mouseenter", (e) => handleMouse(true, e));
      box.addEventListener("mouseleave", (e) => handleMouse(false, e));
    });
  }, 0);
}

/**
 * 텍스트 애니메이션 활성화
 * @param {ShadowRoot} shadowRoot - Shadow DOM 루트
 */
function activateTextAnimation(shadowRoot) {
  setTimeout(() => {
    applySvgAnimation(shadowRoot.querySelector(".textAni"));
    applySvgAnimation(shadowRoot.querySelector(".textBg"));
  }, 0);
}

// svg 애니메이션
function applySvgAnimation(svgElement) {
  if (!svgElement) return;
  const paths = svgElement.querySelectorAll("path");

  paths.forEach((el, i) => {
    const length = el.getTotalLength();
    el.style.setProperty("--length", length);
    el.style.setProperty("--delay", `${i * 100}ms`);
    el.style.setProperty("--duration", `${length * 10}ms`);
  });
}

// 난수생성
function getRandomInt(min, max) {
  return Math.floor(
    Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min)
  );
}
