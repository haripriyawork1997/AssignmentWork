// 1. Regular function to calculate result
function calculateResult(marks) {
  if (marks >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}

// 2. Arrow function to display result
const displayResult = (name, result) => {
  console.log(`${name} - ${result}`);
};

// 3. Array of learner objects
const learners = [
  { name: "Anu", marks: 75 },
  { name: "Rahul", marks: 42 },
  { name: "Meena", marks: 68 },
  { name: "Arun", marks: 35 }
];

// 4 & 5. Loop through learners using for...of and call functions
for (const learner of learners) {
  const result = calculateResult(learner.marks);
  displayResult(learner.name, result);
}