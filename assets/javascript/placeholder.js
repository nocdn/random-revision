const year1curriculum = [
  "1.1: Number",
  "1.2: String",
  "1.3: Boolean",
  "1.4: Array",
  "1.5: Object",
];

const year2curriculum = [
  "2.1: Loops",
  "2.2: Functions",
  "2.3: Objects",
  "2.4: Arrays",
  "2.5: Classes",
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
  applyEffects(elementToSelect);
  lastChosenTopic = chosenTopic;
  console.log(lastChosenTopic);
  whichYearChosenFunction(lastChosenTopic);
  curriculumArray.pop(chosenTopic);

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

// Adding the functions to the buttons

document.querySelector(".year-1").addEventListener("click", function () {
  randomTopic(year1curriculum);
  lastCurriculumChoice = year1curriculum;
  showRerollButton();
});

document.querySelector(".year-2").addEventListener("click", function () {
  randomTopic(year2curriculum);
  lastCurriculumChoice = year2curriculum;
  showRerollButton();
});

document.querySelector(".combine").addEventListener("click", function () {
  randomFromBoth();
  lastCurriculumChoice = year1curriculum.concat(year2curriculum);
  showRerollButton();
});

rerollButton.addEventListener("click", function () {
  randomTopic(lastCurriculumChoice);
  animateReroll();
});
