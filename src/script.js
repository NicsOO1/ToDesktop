const navDialog = document.getElementById("nav-dialog");
function handleMenu() {
  navDialog.classList.toggle('hidden');
}

const intialTranslateLTR = -48 * 4;
const intialTranslateRTL = 36 * 4;

function setupIntersectionObserver(element, isLTR, speed) {
  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;

    if(isIntersecting) {
      document.addEventListener('scroll', scrollHandler);
    } else {
      document.removeEventListener('scroll', scrollHandler)
    }

    console.log(element, isIntersecting);
  }

  const intersectionObserver = new IntersectionObserver(intersectionCallback);
  intersectionObserver.observe(element);

  function scrollHandler() {
    const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

    let totalTranslate = 0;

    if (isLTR) totalTranslate = translateX + intialTranslateLTR;
    else totalTranslate = -(translateX + intialTranslateRTL);
  

    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('lane');

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, true, 0.8);

const faqBoxes = document.querySelectorAll(".fq-box");

faqBoxes.forEach(faqBox => {
  faqBox.addEventListener("click", () => {
    const currentFaq = faqBox.querySelector(".def-sec");
    const arrow = faqBox.querySelector(".arrow");
    currentFaq.classList.toggle('hidden');
    arrow.classList.toggle('rotate-180');
  });

});