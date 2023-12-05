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

const year2curriculum = [
  "1.1: Proof by contradiction",
  "1.2: Algebraic fractions",
  "1.3: Partial fractions",
  "1.4: Repeated factors",
  "1.5: Algebraic division",
  "2.1: The modulus function",
  "2.2: Functions and mappings",
  "2.3: Composite functions",
  "2.4: Inverse functions",
  "2.5: y = |f(x)| and y = f(|x|)",
  "2.6: Combining transformations",
  "2.7: Solving modulus problems",
  "3.1: Arithmetic sequences",
  "3.2: Arithmetic series",
  "3.3: Geometric sequences",
  "3.4: Geometric series",
  "3.5: Sum to infinity",
  "3.6: Sigma notation",
  "3.7: Recurrence relations",
  "3.8: Modelling with series",
  "4.1: Expanding (1 + x)n",
  "4.2: Expanding (a + bx)n",
  "4.3 Using partial fractions",
  "5.1: Radian measure",
  "5.2: Arc length",
  "5.3: Areas of sectors and segments",
  "5.4: Solving trigonometric equations",
  "5.5: Small angle approximations",
  "6.1: Secant, cosecant and cotangent",
  "6.2: Graphs of sec x, cosec x and cot x",
  "6.3: Using sec x, cosec x and cot x",
  "6.4: Trigonometric identities",
  "6.5: Inverse trigonometric functions",
  "7.1: Addition formulae",
  "7.2: Using the angle addition formulae",
  "7.3: Double-angle formulae",
  "7.4: Solving trigonometric equations",
  "7.5: Simplifying a cos x +- b sin x",
  "7.6: Proving trigonometric identities",
  "7.7: Modelling with trigonometric functions",
  "8.1: Parametric equations",
  "8.2: Using trigonometric identities",
  "8.3: Curve sketching",
  "8.4: Points of intersection",
  "8.5: Modelling with parametric equations",
  "9.1: Differentiating sin x and cos x",
  "9.2: Differentiating exponentials and logarithms",
  "9.3: The chain rule",
  "9.4: The product rule",
  "9.5: The quotient rule",
  "9.6: Differentiating trigonometric functions",
  "9.7: Parametric differentiation",
  "9.8: Implicit differentiation",
  "9.9: Using second derivatives",
  "9.10: Rates of change",
  "10.1: Locating roots",
  "10.2: Iteration",
  "10.3: The Newton-Raphson method",
  "10.4: Applications to modelling",
  "11.1: Integrating standard functions",
  "11.2: Integrating f(ax + b)",
  "11.3: Using trigonometric identities",
  "11.4: Reverse chain rule",
  "11.5: Integration by substitution",
  "11.6: Integration by parts",
  "11.7: Partial fractions",
  "11.8: Finding areas",
  "11.9: The trapezium rule",
  "11.10: Solving differential equations",
  "11.11: Modelling with differential equations",
  "12.1: 3D coordinates",
  "12.2: Vectors in 3D",
  "12.3: Solving geometric problems",
  "12.4: Application to mechanics",
];

console.log(`Year 1 curriculum: ${year1curriculum.length} topics`);
console.log(`Year 2 curriculum: ${year2curriculum.length} topics`);
console.log(
  `Last topic in year 1: ${year1curriculum[year1curriculum.length - 1]}`
);
console.log(`First element in year 2: ${year2curriculum[0]}`);

const combinedArray = year1curriculum.concat(year2curriculum);

console.log(`Combined curriculum: ${combinedArray.length} topics`);

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

  setTimeout(() => {
    topicElement.innerText = chosenTopic;
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
  randomTopic(combinedArray);
  lastCurriculumChoice = year1curriculum.concat(year2curriculum);
  showRerollButton();
  highlightWhichYear();
});

rerollButton.addEventListener("click", function () {
  randomTopic(lastCurriculumChoice);
  animateReroll();
  highlightWhichYear();
});
