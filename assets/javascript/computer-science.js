const curriculum = [
  "1.1.1 Structure and function of the processor (A Level only)",
  "1.1.1 Structure and function of the processor",
  "1.1.2 Types of Processor (A Level only)",
  "1.1.2 Types of Processor",
  "1.1.3 Input, Output and Storage",
  "1.2.1. Systems Software",
  "1.2.2. Applications Generation",
  "1.2.3. Software Development",
  "1.2.4. Types of Programming Language",
  "1.3.1. Compression, Encryption and Hashing",
  "1.3.2. Databases",
  "1.3.3. Networks",
  "1.3.4. Web Technologies",
  "1.4.1. Data Types",
  "1.4.2. Data Structures",
  "1.4.3. Boolean Algebra",
  "1.5.1. Computing Related Legislation",
  "1.5.2. Moral and Ethical Issues",
  "2.1.1. Thinking Abstractly",
  "2.1.2. Thinking Ahead",
  "2.1.3. Thinking Procedurally",
  "2.1.4. Thinking Logically",
  "2.1.5. Thinking Concurrently",
  "2.2.1. Programming Techniques",
  "2.2.2. Computational Methods",
  "2.3.1. Analysis, Design and Comparison of Algorithms",
  "2.3.2. Algorithms for the Main Data Structures",
  "2.3.3. Sorting Algorithms",
  "2.3.4. Searching Algorithms",
  "2.3.5. Path Finding Algorithms",
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

document.addEventListener("DOMContentLoaded", function () {
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
    rerollButton.style.opacity = "1";
    rerollButton.style.filter = "blur(0)";
  }, 500);

  document.querySelector(".reroll").addEventListener("click", function () {
    randomTopic(curriculum, false);
  });
});
