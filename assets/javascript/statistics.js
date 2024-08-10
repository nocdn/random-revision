const year1curriculum = [
  "1.1: Populations and samples",
  "1.2: Sampling",
  "1.3: Non-random sampling",
  "1.4: Types of data",
  "1.5: The large data set",

  "2.1: Measures of central tendency",
  "2.2: Other measures of location",
  "2.3: Measures of spread",
  "2.4: Variance and standard deviation",
  "2.5: Coding",

  "3.1: Outliers",
  "3.2: Box plots",
  "3.3: Cumulative frequency",
  "3.4: Histograms",
  "3.5: Comparing data",

  "4.1: Correlation",
  "4.2: Linear regression",

  "5.1: Calculating probabilities",
  "5.2: Venn diagrams",
  "5.3: Mutually exclusive and independent events ",
  "5.4: Tree diagrams",

  "6.1: Probability distributions",
  "6.2: The binomial distribution",
  "6.3: Cumulative probabilities",

  "7.1: Hypothesis testing",
  "7.2: Finding critical values",
  "7.3: One-tailed tests",
  "7.4: Two-tailed tests",
];

const year2curriculum = [
  "1.1: Exponential models",
  "1.2: Measuring correlation",
  "1.3: Hypothesis testing for zero correlation",

  "2.1: Set notation",
  "2.2: Conditional probability",
  "2.3: Conditional probabilities in Venn diagrams",
  "2.4: Probability formulae",
  "2.5: Tree diagrams",

  "3.1: The normal distribution",
  "3.2: Finding probabilities for normal distributions",
  "3.3: The inverse normal distribution function",
  "3.4: The standard normal distribution",
  "3.5: Finding µ and σ",
  "3.6: Approximating a binomial distribution",
  "3.7: Hypothesis testing with the normal distribution",
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

rerollButton.addEventListener("mousedown", function () {
  randomTopic(lastCurriculumChoice);
  animateReroll();
  highlightWhichYear();
});

document.querySelector(".year-2").addEventListener("click", function () {
  removeSecondYear();
});
