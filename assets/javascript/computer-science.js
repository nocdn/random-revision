const curriculum = [
  "1.1.1 Structure and function of the processor (A Level only)",
  "1.1.1 Structure and function of the processor",
  "1.1.2 Types of Processor (A Level only)",
  "1.1.2 Types of Processor",
  "1.1.3 Input, Output and Storage",
  "1.2.1 Systems Software",
  "1.2.2 Applications Generation",
  "1.2.3 Software Development",
];

const applyEffects = function () {
  const topic = document.querySelector(".topic");
  topic.style.filter = "blur(20px)";
  topic.style.transform = "scale(0.1)";
  topic.style.opacity = "0.3";
};

const removeEffects = function () {
  const topic = document.querySelector(".topic");
  topic.style.filter = "blur(0)";
  topic.style.transform = "scale(1)";
  topic.style.opacity = "1";
};

const randomTopic = function (curriculumArray, isFirstLoad = True) {
  const topic = document.querySelector(".topic");

  // Apply blur and scale down before changing the text
  applyEffects();

  // if is first load assign text immediately, no timeout but still apply effects
  if (isFirstLoad) {
    const topic = document.querySelector(".topic");
    topic.style.filter = "blur(20px)";

    topic.innerText =
      curriculumArray[Math.floor(Math.random() * curriculumArray.length)];
    setTimeout(removeEffects, 10);
    // removeEffects();
  } else {
    setTimeout(function () {
      topic.innerText =
        curriculumArray[Math.floor(Math.random() * curriculumArray.length)];
    }, 300);
    setTimeout(removeEffects, 500);
  }
};

// load a random topic on page load
randomTopic(curriculum, true);
setTimeout(function () {
  const rerollButton = document.querySelector(".reroll");
  // rerollButton.style.display = "block";
  rerollButton.style.opacity = "1";
  rerollButton.style.filter = "blur(0)";
}, 500);

document.querySelector(".reroll").addEventListener("click", function () {
  randomTopic(curriculum, false);
});
