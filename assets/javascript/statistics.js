const year1curriculum = [
  "1.1: Index laws",
  "1.2: Expanding brackets",
  "1.3: Factorising",
  "1.4: Negative and fractional indices",
  "1.5: Surds",
  "1.6: Rationalising denominators",
  "2.1: Solving quadratic equations",
  "2.2: Completing the square",
  "2.3: Functions",
  "2.4: Quadratic graphs",
  "2.5: The discriminant",
  "2.6: Modelling with quadratics",
  "3.1: Linear simultaneous equations",
  "3.2: Quadratic simultaneous equations",
  "3.3: Simultaneous equations on graphs",
  "3.4: Linear inequalities",
  "3.5: Quadratic inequalities",
  "3.6: Inequalities on graphs",
  "3.7: Regions",
  "4.1: Cubic graphs",
  "4.2: Quartic graphs",
  "4.3: Reciprocal graphs",
  "4.4: Points of intersection",
  "4.5: Translating graphs",
  "4.6: Stretching graphs",
  "4.7: Transforming functions",
  "5.1: y = mx + c",
  "5.2: Equations of straight lines",
  "5.3: Parallel and perpendicular lines",
  "5.4: Length and area",
  "5.5: Modelling with straight lines",
  "6.1: Midpoints and perpendicular bisectors",
  "6.2: Equation of a circle",
  "6.3: Intersections of straight lines and circles",
  "6.4: Use tangent and chord properties",
  "6.5: Circles and triangles",
  "7.1: Algebraic fractions",
  "7.2: Dividing polynomials",
  "7.3: The factor theorem",
  "7.4: Mathematical proof",
  "7.5: Methods of proof",
  "8.1: Pascal's triangle",
  "8.2: Factorial notation",
  "8.3: The binomial expansion",
  "8.4: Solving binomial problems",
  "8.5: Binomial estimation",
  "9.1: The cosine rule",
  "9.2: The sine rule",
  "9.3: Areas of triangles",
  "9.4: Solving triangle problems",
  "9.5: Graphs of sine, cosine and tangent",
  "9.6: Transforming trigonometric graphs",
  "10.1: Angles in all four quadrants",
  "10.2: Exact values of trigonometrical ratios",
  "10.3: Trigonometric identities",
  "10.4: Simple trigonometric equations",
  "10.5: Harder trigonometric equations",
  "10.6: Equations and identities",
  "11.1: Vectors",
  "11.2: Representing vectors",
  "11.3: Magnitude and direction",
  "11.4: Position vectors",
  "11.5: Solving geometric problems",
  "11.6: Modelling with vectors",
  "12.1: Gradients of curves",
  "12.2: Finding the derivative",
  "12.3: Differentiating xn",
  "12.4: Differentiating quadratics",
  "12.5: Differentiating functions with two or more terms",
  "12.6: Gradients, tangents and norma",
  "12.7: Increasing and decreasing functions",
  "12.8: Second order derivatives",
  "12.9: Stationary points",
  "12.10: Sketching gradient functions",
  "12.11: Modelling with differentiation",
  "13.1: Integrating xn",
  "13.2: Indefinite integrals",
  "13.3: Finding functions",
  "13.4: Definite integrals",
  "13.5: Areas under curves",
  "13.6: Areas under the x-axis",
  "13.7: Areas between curves and lines",
  "14.1: Exponential functions",
  "14.2: у = ex",
  "14.3: Exponential modelling",
  "14.4: Logarithms",
  "14.5: Laws of logarithms",
  "14.6: Solving equations using logarithms",
  "14.7: Working with natural logarithms",
  "14.8: Logarithms and non-linear data",
];

const year2curriculum = ["No topics for year 2"];

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
