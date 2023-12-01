animationButton = document.querySelector(".button-cs");
console.log(animationButton);

function getElementCenter(element) {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + window.scrollX + rect.width / 2;
  const centerY = rect.top + window.scrollY + rect.height / 2;
  return { x: centerX, y: centerY };
}

function setElementPositionByCenter(element, centerX, centerY) {
  if (!(element instanceof HTMLElement)) {
    throw new Error("Invalid element provided.");
  }

  element.style.position = "absolute";
  const rect = element.getBoundingClientRect();
  const left = centerX - rect.width / 2;
  const top = centerY - rect.height / 2;
  element.style.left = `${left}px`;
  element.style.top = `${top}px`;
}

const placeholder = document.createElement("div");
placeholder.style.width = "20px";
placeholder.style.height = "20px";
placeholder.style.backgroundColor = "red";
placeholder.style.zIndex = 10;
placeholder.style.opacity = 0;
placeholder.style.transition = "0.5s";
document.body.appendChild(placeholder);
console.log(placeholder);
const center = getElementCenter(animationButton);
setElementPositionByCenter(placeholder, center.x, center.y);

animationButton.addEventListener("click", function () {
  console.log("clicked computer science button");
  const clonedElement = animationButton.cloneNode(true);
  clonedElement.id = "clonedElement";
  document.body.appendChild(clonedElement);

  // Set initial size and position to match the original element
  const originalCenter = getElementCenter(animationButton);
  setElementPositionByCenter(clonedElement, originalCenter.x, originalCenter.y);
  const originalRect = animationButton.getBoundingClientRect();
  clonedElement.style.width = `${originalRect.width}px`;
  clonedElement.style.height = `${originalRect.height}px`;
  clonedElement.style.zIndex = 5;
  clonedElement.style.transition = "all 0.7s ease-in-out";

  // Delay to allow initial position and size to take effect
  setTimeout(() => {
    // Animate to full screen
    clonedElement.style.width = "100vw";
    clonedElement.style.height = "100vh";
    clonedElement.style.top = "0px";
    clonedElement.style.left = "0px";
  }, 10);

  console.log("cloned element created");
  setTimeout(function () {
    document.body.style.transition = "transform 0.75s ease-in-out";
    document.body.style.transform = "translateX(-100vw)"; // vw units ensure the whole viewport width is used
  }, 650);
});

// Uncomment the below line to navigate to a new page after the animation
// setTimeout(function () {
//   window.location.href = "computer-science.html";
// }, 500);
