const physical = [
  "Amount of structure",
  "Atomic structure",
  "Kinetics",
  "Structure and bonding",
  "Energetics",
  "Oxidation, reduction and redox equations",
  "Equilibrium constant, Kp",
  "Equilibria",
  "Acids and bases",
  "Thermodynamics",
  "Electrochemistry",
  "Rates",
];

const organic = [
  "Alkanes",
  "Alkenes",
  "Halogenalkanes",
  "Alcohols",
  "Organic analysis ",
  "Optical isomerism",
  "Aromatic chemistry ",
  "Amines",
  "Polymers",
  "Amino acids, proteins and DNA",
  "Aldehydes and ketones",
  "Carboxylic acids and derivatives ",
  "NMR spectroscopy",
  "Mechanisms",
];

const inorganic = [
  "Periodicity ",
  "Group 2",
  "Group 7",
  "Period 3",
  "Transition metals",
  "Chlorine and water",
];

const combinedArray = physical.concat(organic, inorganic);

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
  // check which year the topic is from

  if (physical.includes(lastTopic)) {
    whichYearChosen = "physical";
  } else if (organic.includes(lastTopic)) {
    whichYearChosen = "oranic";
  } else if (inorganic.includes(lastTopic)) {
    whichYearChosen = "inorganic";
  } else {
    whichYearChosen = "combined";
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
  const physical = document.querySelector(".physical");
  const organic = document.querySelector(".organic");
  const inorganic = document.querySelector(".inorganic");

  // Remove existing corner effects, if any
  physical.innerHTML = "Physical";
  organic.innerHTML = "Organic";
  inorganic.innerHTML = "Inorganic";

  if (whichYearChosen === "physical") {
    applyCornerEffect(physical);
  } else if (whichYearChosen === "organic") {
    applyCornerEffect(organic);
  } else if (whichYearChosen === "inorganic") {
    applyCornerEffect(inorganic);
  } else {
    // applyCornerEffect(physical);
    // applyCornerEffect(organic);
    // applyCornerEffect(inorganic);
  }
};

// Adding the functions to the buttons

document.querySelector(".physical").addEventListener("click", function () {
  randomTopic(physical);
  lastCurriculumChoice = physical;
  showRerollButton();
  highlightWhichYear("physical");
});

document.querySelector(".organic").addEventListener("click", function () {
  randomTopic(organic);
  lastCurriculumChoice = organic;
  showRerollButton();
  highlightWhichYear("organic");
});

document.querySelector(".inorganic").addEventListener("click", function () {
  randomTopic(inorganic);
  lastCurriculumChoice = inorganic;
  showRerollButton();
  highlightWhichYear("inorganic");
});

document.querySelector(".combine").addEventListener("click", function () {
  randomTopic(combinedArray);
  lastCurriculumChoice = physical.concat(organic, inorganic);
  showRerollButton();
  highlightWhichYear();
});

rerollButton.addEventListener("mousedown", function () {
  randomTopic(lastCurriculumChoice);
  animateReroll();
  highlightWhichYear();
});
