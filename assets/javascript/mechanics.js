const year1curriculum = [
  "8.1: Constructing a model",
  "8.2: Modelling assumptions",
  "8.3: Quantities and units",
  "8.4: Working with vectors",
  "9.1: Displacement-time graphs",
  "9.2: Velocity-time graphs",
  "9.3: Constant acceleration formulae 1",
  "9.4: Constant acceleration formulae 2",
  "9.5: Vertical motion under gravity",
  "10.1: Force diagrams",
  "10.2: Forces as vectors",
  "10.3: Forces and acceleration",
  "10.4: Motion in 2 dimensions",
  "10.5: Connected particles",
  "10.6: Pulleys",
  "11.1: Functions of time",
  "11.2: Using differentiation",
  "11.3: Maxima and minima problems",
  "11.4: Using integration",
  "11.5: Constant acceleration formulae",
];

const year2curriculum = [
  "4.1: Moments",
  "4.2: Resultant moments",
  "4.3: Equilibrium",
  "4.4: Centres of mass",
  "4.5: Tilting",
  "5.1: Resolving forces",
  "5.2: Inclined planes",
  "5.3: Friction",
  "6.1: Horizontal projection",
  "6.2: Horizontal and vertical components",
  "6.3: Projection at any angle",
  "6.4: Projectile motion formulae",
  "7.1: Static particles",
  "7.2: Modelling with staticsx",
  "7.3: Friction and static particles",
  "7.4: Static rigid bodies",
  "7.5: Dynamics and inclined planes",
  "7.6: Connected particles",
  "8.1: Vectors in kinematics",
  "8.2: Vector methods with projectiles",
  "8.3: Variable acceleration in one dimension",
  "8.4: Differentiating vectors",
  "8.5: Integrating vectors",
];

const combinedArray = year1curriculum.concat(year2curriculum);

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

let lastChosenTopic;
let whichYearChosen;

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

const whichYearChosenFunction = function (lastTopic) {
  const year1Length = year1curriculum.length;
  if (combinedArray.indexOf(lastTopic) >= year1Length) {
    whichYearChosen = "year-2";
  } else {
    whichYearChosen = "year-1";
  }
  console.log(whichYearChosen);
  return whichYearChosen;
};

const rerollButton = document.querySelector(".reroll");

const showRerollButton = function () {
  setTimeout(() => {
    rerollButton.style.opacity = "1";
    rerollButton.style.filter = "blur(0)";
  }, 500);
};

const applyCornerEffect = function (element) {
  element.style.position = "relative";

  // Create a ::before pseudo-element equivalent
  const beforeElement = document.createElement("div");
  beforeElement.style.content = '""';
  beforeElement.style.position = "absolute";
  beforeElement.style.top = "-2px";
  beforeElement.style.left = "-2px";
  beforeElement.style.borderTop = "3px solid rgba(200, 162, 200, 0.6)"; // Lilac color
  beforeElement.style.borderLeft = "3px solid rgba(200, 162, 200, 0.6)"; // Lilac color
  beforeElement.style.height = "10px";
  beforeElement.style.width = "10px";

  // Applying initial blur and opacity
  beforeElement.style.filter = "blur(10px)";
  beforeElement.style.opacity = "0.3";

  // Transition properties
  beforeElement.style.transition =
    "filter 1.5s ease-in-out, opacity 1s ease-out";

  element.appendChild(beforeElement);

  // Set timeout to change blur and opacity after appending the element
  setTimeout(() => {
    beforeElement.style.filter = "blur(0)";
    beforeElement.style.opacity = "0.7";
  }, 10); // Small delay to ensure transition effect is visible
};
const highlightWhichYear = function () {
  const year1Button = document.querySelector(".year-1");
  const year2Button = document.querySelector(".year-2");

  // Remove existing corner effects, if any
  year1Button.innerHTML = "Year 1 Topics";
  year2Button.innerHTML = "Year 2 Topics";

  if (whichYearChosen === "year-1") {
    applyCornerEffect(year1Button);
  } else {
    applyCornerEffect(year2Button);
  }
};

const removeSecondYear = function () {
  document.querySelector(".year-2").remove();
  document.querySelector(".combine").remove();
  randomTopic(year1curriculum);
};

// Adding the functions to the buttons

document.querySelector(".year-1").addEventListener("click", function () {
  randomTopic(year1curriculum);
  lastCurriculumChoice = year1curriculum;
  showRerollButton();
  highlightWhichYear("year-1");
});

document.querySelector(".year-2").addEventListener("click", function () {
  randomTopic(year2curriculum);
  lastCurriculumChoice = year2curriculum;
  showRerollButton();
  highlightWhichYear("year-2");
});

document.querySelector(".combine").addEventListener("click", function () {
  randomTopic(combinedArray);
  lastCurriculumChoice = year1curriculum.concat(year2curriculum);
  showRerollButton();
  highlightWhichYear();
  removeSecondYear();
});

rerollButton.addEventListener("click", function () {
  randomTopic(lastCurriculumChoice);
  animateReroll();
  highlightWhichYear();
});

document.querySelector(".year-2").addEventListener("click", function () {
  removeSecondYear();
});
