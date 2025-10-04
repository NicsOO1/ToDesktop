const navDialog = document.getElementById("nav-dialog");
function handleMenu() {
  navDialog.classList.toggle("hidden");
}

// Initial translate values
const intialTranslateLTR = -48 * 4;
const intialTranslateRTL = 36 * 4;

// Store all animated elements
const elements = [];

// Setup function
function setupElement(element, isLTR, speed) {
  const elementTop = element.offsetTop;
  elements.push({ element, isLTR, speed, elementTop });
}

// Scroll handler for listen to the scroll
let ticking = false;
function scrollHandler() {
  if (!ticking) {
    requestAnimationFrame(() => {
      elements.forEach(({ element, isLTR, speed, elementTop }) => {
        // check if in viewport
        const rect = element.getBoundingClientRect();
        if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
          const translateX = (window.scrollY - elementTop + window.innerHeight) * speed;
          const totalTranslate = isLTR
            ? translateX + intialTranslateLTR
            : -(translateX + intialTranslateRTL);

          element.style.transform = `translateX(${totalTranslate}px)`;
        }
      });
      ticking = false;
    });
    ticking = true;
  }
}

// Attach scroll listener
document.addEventListener("scroll", scrollHandler);


const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("lane");

setupElement(line1, true, 0.15);
setupElement(line2, false, 0.15);
setupElement(line3, true, 0.15);
setupElement(line4, true, 0.8);
