const curriculum = [
  "1.1: Holders of Information",
  "1.2: Storage Media",
  "1.3: Access & Storage Devices",
  "1.4: Internet Connections",
  "1.5: WWW Technologies",
  "1.6: Information Formats",
  "1.7 & 1.8: Internet Pros & Cons",
  "2.1: Information Styles",
  "2.2: Information Classification",
  "2.3: Quality of Information",
  "2.4: Information Management",
  "3.1: Data vs. Information",
  "3.2 & 3.3: Information Categories",
  "3.4: Stages of Data Analysis",
  "3.5: Data Analysis Tools",
  "3.6: Information Systems",
  "4.1: UK Legislation",
  "4.2: Global Legislation",
  "4.3: Green IT",
  "5.1: Data Types & Sources",
  "5.2: Data Flow Diagrams",
  "6.1: Security Principles",
  "6.2: Risks",
  "6.3: Impacts",
  "6.4: Protection Measures",
  "6.5: Physical Protection",
  "6.6: Logical Protection",
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
  // remove the topic from the original array
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

const removePickedTopic = function () {
  const topicElement = document.querySelector(".topic");
  const topic = topicElement.innerText;
  const topicIndex = curriculum.indexOf(topic);
  curriculum.splice(topicIndex, 1);
  console.log(`Removed ${topic}`);
  console.log(curriculum);
};
