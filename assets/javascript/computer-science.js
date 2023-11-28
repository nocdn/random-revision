// open the file "subjects/curriculums/computer-science.txt" and put contents into a variable
// then split the contents into an array of strings

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

// pick a random index from the array and assign that to a variable called chosen-topic

const chosenTopic = curriculum[Math.floor(Math.random() * curriculum.length)];
// get the element with class "topic" and assign that to a variable called topic

const topic = document.querySelector(".topic");
// set the text of the element with class "topic" to the value of the variable chosen-topic

topic.innerText = chosenTopic;
