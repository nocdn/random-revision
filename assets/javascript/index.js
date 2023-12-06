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

randomButton = document.querySelector(".random");

randomButton.addEventListener("click", () => {
  const subjectPages = [
    "subjects/computer-science.html",
    "subjects/it.html",
    "subjects/mathematics-mechanics.html",
    "subjects/mathematics-pure.html",
    "subjects/mathematics-statistics.html",
  ];

  const randomIndex = Math.floor(Math.random() * subjectPages.length);
  const randomPage = subjectPages[randomIndex];

  window.location.href = randomPage;
});
