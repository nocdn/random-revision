const curriculum = [
  "Mechanics",
  "Electric circuits",
  "Materials",
  "Waves and Particle nature of light",
  "Fields",
  "Capacitors and Capacitance",
  "Thermodynamics",
  "Radioactivity",
  "Oscillations",
  "Particle physics",
  "Gravitational fields",
  "Space",
];

const applyEffects = function (elementToSelect = ".topic") {
  const topic = document.querySelector(elementToSelect);
  topic.style.filter = "blur(20px)";
  topic.style.transform = "scale(0.1)";
  topic.style.opacity = "0.3";
};

const removeEffects = function (elementToSelect = ".topic") {
  const topic = document.querySelector(elementToSelect);
  topic.style.filter = "blur(0)";
  topic.style.transform = "scale(1)";
  topic.style.opacity = "1";
};

const animateReroll = function () {
  // Make reroll button slightly smaller on click
  const rerollButton = document.querySelector(".reroll");
  rerollButton.style.transform = "scale(0.9)";
  rerollButton.style.transition = "transform 0.1s ease-in-out";
  setTimeout(function () {
    rerollButton.style.transform = "scale(1)";
  }, 100);
};

const randomTopic = function (curriculumArray, elementToSelect = ".topic") {
  const chosenTopic =
    curriculumArray[Math.floor(Math.random() * curriculumArray.length)];
  const topicElement = document.querySelector(elementToSelect);
  curriculumArray.pop(chosenTopic);
  applyEffects(elementToSelect);

  setTimeout(() => {
    if (curriculumArray.length === 0) {
      topicElement.innerText = "No more topics!";
    } else {
      topicElement.innerText = chosenTopic;
    }
    removeEffects(elementToSelect);
  }, 500);
};

const randomFromBoth = function () {
  // Combine the arrays together into one
  const combinedArray = year1curriculum.concat(year2curriculum);
  randomTopic(combinedArray);
};

const rerollButton = document.querySelector(".reroll");

const showRerollButton = function () {
  setTimeout(() => {
    rerollButton.style.opacity = "1";
    rerollButton.style.filter = "blur(0)";
  }, 500);
};

let lastCurriculumChoice;
let choiceSelected = false;
let isFirstLoad = true;

// Adding the functions to the buttons

if (isFirstLoad == true) {
  randomTopic(curriculum);
  isFirstLoad = false;
  showRerollButton();
}

rerollButton.addEventListener("click", function () {
  randomTopic(curriculum);
  animateReroll();
});
